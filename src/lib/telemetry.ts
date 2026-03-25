import { prisma } from "@/lib/prisma";

export type DailyUsagePoint = {
  day: string;
  liters: number;
};

function subDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() - days);
  return d;
}

function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
}

function endOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);
}

function formatDay(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = date.toLocaleString("en-US", { month: "short" });
  return `${day} ${month}`;
}

export async function getLast30DaysUsage(userId: string): Promise<DailyUsagePoint[]> {
  const now = new Date();
  const start = startOfDay(subDays(now, 29));

  const rows = await prisma.waterReading.findMany({
    where: {
      userId,
      capturedAt: {
        gte: start,
        lte: endOfDay(now)
      }
    },
    select: {
      liters: true,
      capturedAt: true
    },
    orderBy: {
      capturedAt: "asc"
    }
  });

  const map = new Map<string, number>();

  for (let i = 0; i < 30; i += 1) {
    const d = subDays(now, 29 - i);
    map.set(formatDay(d), 0);
  }

  rows.forEach((row: { liters: number; capturedAt: Date }) => {
    const key = formatDay(row.capturedAt);
    map.set(key, (map.get(key) ?? 0) + row.liters);
  });

  return Array.from(map.entries()).map(([day, liters]) => ({
    day,
    liters: Number(liters.toFixed(2))
  }));
}
