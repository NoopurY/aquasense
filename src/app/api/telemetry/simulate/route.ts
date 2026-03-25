import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

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

function setHours(date: Date, hours: number): Date {
  const d = new Date(date);
  d.setHours(hours);
  return d;
}

function setMinutes(date: Date, minutes: number): Date {
  const d = new Date(date);
  d.setMinutes(minutes);
  return d;
}

export async function POST() {
  const user = await getSessionUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const device = await prisma.device.findFirst({ where: { userId: user.userId } });
  if (!device) {
    return NextResponse.json({ error: "No device found." }, { status: 404 });
  }

  const start = startOfDay(subDays(new Date(), 29));
  const end = endOfDay(new Date());

  await prisma.waterReading.deleteMany({
    where: {
      userId: user.userId,
      capturedAt: {
        gte: start,
        lte: end
      }
    }
  });

  const entries: {
    userId: string;
    deviceId: string;
    pulses: number;
    liters: number;
    flowRate: number;
    source: string;
    capturedAt: Date;
  }[] = [];

  for (let d = 29; d >= 0; d -= 1) {
    const day = subDays(new Date(), d);
    const liters = 320 + Math.random() * 980;
    const pulses = Math.round(liters * Number(process.env.PULSES_PER_LITER ?? 450));

    entries.push({
      userId: user.userId,
      deviceId: device.id,
      pulses,
      liters: Number(liters.toFixed(3)),
      flowRate: Number((1.6 + Math.random() * 2.2).toFixed(2)),
      source: "simulation",
      capturedAt: setMinutes(setHours(day, 10 + Math.floor(Math.random() * 8)), Math.floor(Math.random() * 59))
    });
  }

  await prisma.waterReading.createMany({ data: entries });

  return NextResponse.json({ ok: true, generated: entries.length });
}
