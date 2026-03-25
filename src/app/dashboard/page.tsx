import { AquaLogo } from "@/components/AquaLogo";
import { DashboardCharts } from "@/components/DashboardCharts";
import { LogoutButton } from "@/components/LogoutButton";
import { SeedDataButton } from "@/components/SeedDataButton";
import { requireSessionUser } from "@/lib/auth";
import { computeBillFromLiters } from "@/lib/billing";
import { prisma } from "@/lib/prisma";
import { getLast30DaysUsage } from "@/lib/telemetry";

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
    return null;
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
      <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <AquaLogo compact />
          <p className="mt-2 text-sm text-cyan-100/80">Welcome back, {user.fullName}. Your telemetry and slab billing are live.</p>
        </div>
        <div className="flex items-center gap-3">
          <SeedDataButton />
          <LogoutButton />
        </div>
      </header>

      <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <article className="metric-card">
          <p className="text-sm text-cyan-200/80">Current Flow Rate</p>
          <p className="text-3xl font-bold">{metricLabel(lastReading?.flowRate ?? 0)} L/min</p>
        </article>
        <article className="metric-card">
          <p className="text-sm text-cyan-200/80">Total Usage (Month)</p>
          <p className="text-3xl font-bold">{metricLabel(monthLiters)} Liters</p>
        </article>
        <article className="metric-card">
          <p className="text-sm text-cyan-200/80">Today&apos;s Usage</p>
          <p className="text-3xl font-bold">{metricLabel(todayLiters)} Liters</p>
        </article>
        <article className="metric-card">
          <p className="text-sm text-cyan-200/80">Estimated Bill (30 Days)</p>
          <p className="text-3xl font-bold">Rs {metricLabel(bill.total)}</p>
        </article>
      </section>

      <section className="mb-6 grid gap-6 lg:grid-cols-3">
        <article className="glass-card lg:col-span-2">
          <h3 className="mb-4 text-2xl font-semibold">Slab Billing Summary</h3>
          <div className="space-y-2 text-cyan-100">
            <p>Usage this month: {bill.usageKL.toFixed(2)} KL</p>
            <p>First 8 KL: Rs {bill.first8.toFixed(2)}</p>
            <p>Next 12 KL: Rs {bill.next12.toFixed(2)}</p>
            <p>Above 20 KL: Rs {bill.above20.toFixed(2)}</p>
            <p className="pt-2 text-xl font-bold text-white">Total Bill: Rs {bill.total.toFixed(2)}</p>
          </div>
        </article>

        <article className="glass-card">
          <h3 className="mb-3 text-2xl font-semibold">Device Credentials</h3>
          {device ? (
            <div className="space-y-2 text-sm text-cyan-100">
              <p>
                Device ID: <span className="font-semibold text-cyan-300">{device.deviceId}</span>
              </p>
              <p>
                ESP32 Token: <span className="break-all font-semibold text-cyan-300">{device.ingestToken}</span>
              </p>
              <p className="text-cyan-100/70">Send telemetry to /api/telemetry/ingest using this token.</p>
            </div>
          ) : (
            <p>No device configured.</p>
          )}
        </article>
      </section>

      <DashboardCharts dailyUsage={dailyUsage} slabDistribution={slabDistribution} />
    </main>
  );
}
