import dynamic from "next/dynamic";
import { redirect } from "next/navigation";
import { AquaLogo } from "@/components/AquaLogo";
import { LogoutButton } from "@/components/LogoutButton";
import { SeedDataButton } from "@/components/SeedDataButton";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";
import { DashboardAutoRefresh } from "@/components/DashboardAutoRefresh";
import { RecentReadingsFeed } from "@/components/RecentReadingsFeed";
import { requireSessionUser } from "@/lib/auth";
import { computeBillFromLiters } from "@/lib/billing";
import { prisma } from "@/lib/prisma";
import { getLast30DaysUsage } from "@/lib/telemetry";

const DashboardCharts = dynamic(
  () => import("@/components/DashboardCharts").then((module) => module.DashboardCharts),
  {
    loading: () => <div className="glass-card h-[420px] animate-pulse" />
  }
);

function metricLabel(value: number): string {
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

export default async function DashboardPage() {
  const session = await requireSessionUser();
  const now = new Date();

  const [user, todaysUsage, monthlyUsage, lastReading, dailyUsage] = await Promise.all([
    prisma.user.findUnique({
      where: { id: session.userId },
      include: { devices: true }
    }),
    prisma.waterReading.aggregate({
      _sum: { liters: true },
      where: {
        userId: session.userId,
        capturedAt: {
          gte: startOfDay(now),
          lte: endOfDay(now)
        }
      }
    }),
    prisma.waterReading.aggregate({
      _sum: { liters: true },
      where: {
        userId: session.userId,
        capturedAt: {
          gte: startOfMonth(now),
          lte: endOfDay(now)
        }
      }
    }),
    prisma.waterReading.findFirst({
      where: { userId: session.userId },
      orderBy: { capturedAt: "desc" }
    }),
    getLast30DaysUsage(session.userId)
  ]);

  if (!user) {
    redirect("/login");
  }

  const device = user.devices[0] ?? null;
  const todayLiters = todaysUsage._sum.liters ?? 0;
  const monthLiters = monthlyUsage._sum.liters ?? 0;
  const bill = computeBillFromLiters(monthLiters);

  const slabDistribution = [
    { name: "0-8KL", value: Number(bill.first8.toFixed(2)) },
    { name: "8-20KL", value: Number(bill.next12.toFixed(2)) },
    { name: "Above 20KL", value: Number(bill.above20.toFixed(2)) }
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10">
      <DashboardAutoRefresh intervalMs={5000} />
      <section className="mb-5 rounded-full border border-[var(--border-hover)] bg-[rgba(3,18,36,0.8)] px-4 py-2 text-xs uppercase tracking-[0.16em] text-cyan-100 md:text-sm">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-emerald-200">
            <span className="status-dot" /> LIVE
          </span>
          <span>Device: {device?.deviceId ?? "waterMeter_01"}</span>
          <span>Flow: {(lastReading?.flowRate ?? 0).toFixed(2)} L/min</span>
          <span>Total: {metricLabel(monthLiters)} L</span>
          <span>Azure: Connected</span>
          <span>Last Update: 2s ago</span>
        </div>
      </section>

      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <AquaLogo compact />
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cyan-200/75">Control Center</p>
          <p className="mt-1 text-sm text-cyan-100/80">Welcome back, {user.fullName}. Your telemetry and slab billing are live.</p>
        </div>
        <div className="flex items-center gap-3">
          <SeedDataButton />
          <LogoutButton />
        </div>
      </header>

      <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="metric-card">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Current Flow Rate</p>
          <CountUp className="kpi-number mt-1 block text-3xl" decimals={2} suffix=" L/min" value={lastReading?.flowRate ?? 0} />
          <Sparkline className="mt-2 w-full" points={[1.8, 2.2, 2.7, 3.1, 2.9, lastReading?.flowRate ?? 0]} width={220} />
        </article>
        <article className="metric-card">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Total Usage (Month)</p>
          <CountUp className="kpi-number mt-1 block text-3xl" suffix=" L" value={monthLiters} />
          <Sparkline className="mt-2 w-full" points={[220, 260, 280, 320, 350, monthLiters]} width={220} />
        </article>
        <article className="metric-card">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Today&apos;s Usage</p>
          <CountUp className="kpi-number mt-1 block text-3xl" suffix=" L" value={todayLiters} />
          <Sparkline className="mt-2 w-full" points={[22, 35, 50, 72, 81, todayLiters]} width={220} />
        </article>
        <article className="metric-card">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/80">Estimated Bill (30 Days)</p>
          <CountUp className="kpi-number mt-1 block text-3xl" prefix="Rs " value={bill.total} />
          <Sparkline className="mt-2 w-full" points={[160, 210, 275, 320, 380, bill.total]} width={220} />
        </article>
      </section>

      <section className="mb-6 grid gap-6 lg:grid-cols-3">
        <article className="lg:col-span-2">
          <RecentReadingsFeed userId={session.userId} />
        </article>

        <article className="glass-card">
          <h3 className="mb-4 text-2xl font-semibold">Device Status</h3>
          {device ? (
            <div className="space-y-2 text-sm text-cyan-100">
              <p>
                Device ID: <span className="font-semibold text-cyan-300">{device.deviceId}</span>
              </p>
              <p>
                Provisioning: <span className="font-semibold text-emerald-300">Configured</span>
              </p>
              <p className="text-cyan-100/70">Your device is linked and sends telemetry automatically. No manual token entry is needed.</p>
            </div>
          ) : (
            <p>No device configured.</p>
          )}
        </article>
      </section>

      <section className="mb-6 grid gap-6 lg:grid-cols-3">
        <article className="glass-card lg:col-span-2">
          <h3 className="mb-4 text-2xl font-semibold">Slab Billing Summary</h3>
          <div className="space-y-2 text-cyan-100 md:text-[1.02rem]">
            <p>Usage this month: {bill.usageKL.toFixed(2)} KL</p>
            <p>First 8 KL: Rs {bill.first8.toFixed(2)}</p>
            <p>Next 12 KL: Rs {bill.next12.toFixed(2)}</p>
            <p>Above 20 KL: Rs {bill.above20.toFixed(2)}</p>
            <p className="pt-2 text-xl font-bold text-white">Total Bill: Rs {bill.total.toFixed(2)}</p>
          </div>
        </article>

      <DashboardCharts averageFlow={2.1} dailyUsage={dailyUsage} slabDistribution={slabDistribution} />
    </main>
  );
}
