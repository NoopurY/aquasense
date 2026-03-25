import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { computeBillFromLiters } from "@/lib/billing";
import { prisma } from "@/lib/prisma";

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1, 0, 0, 0, 0);
}

export async function GET() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();

  const [today, month, latest] = await Promise.all([
    prisma.waterReading.aggregate({
      _sum: { liters: true },
      where: { userId: user.userId, capturedAt: { gte: startOfDay(now), lte: endOfDay(now) } }
    }),
    prisma.waterReading.aggregate({
      _sum: { liters: true },
      where: { userId: user.userId, capturedAt: { gte: startOfMonth(now), lte: endOfDay(now) } }
    }),
    prisma.waterReading.findFirst({ where: { userId: user.userId }, orderBy: { capturedAt: "desc" } })
  ]);

  const monthlyLiters = month._sum.liters ?? 0;
  const billing = computeBillFromLiters(monthlyLiters);

  return NextResponse.json({
    todayLiters: today._sum.liters ?? 0,
    monthlyLiters,
    currentFlowRate: latest?.flowRate ?? 0,
    bill: billing
  });
}
