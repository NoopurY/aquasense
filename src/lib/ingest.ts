import { prisma } from "@/lib/prisma";

type ReadingInput = {
  pulses: number;
  flowRate?: number;
  capturedAt?: string;
};

function toCapturedAt(input?: string): Date {
  if (!input) {
    return new Date();
  }

  const parsed = new Date(input);
  if (Number.isNaN(parsed.valueOf())) {
    return new Date();
  }
  return parsed;
}

function pulsesToLiters(pulses: number): number {
  const pulsesPerLiter = Number(process.env.PULSES_PER_LITER ?? 450);
  return Number((pulses / pulsesPerLiter).toFixed(4));
}

export async function ingestUsingDeviceToken(deviceToken: string, payload: ReadingInput, source = "esp32") {
  const device = await prisma.device.findUnique({
    where: { ingestToken: deviceToken },
    include: { user: true }
  });

  if (!device) {
    return null;
  }

  return prisma.waterReading.create({
    data: {
      userId: device.userId,
      deviceId: device.id,
      pulses: payload.pulses,
      liters: pulsesToLiters(payload.pulses),
      flowRate: payload.flowRate,
      capturedAt: toCapturedAt(payload.capturedAt),
      source
    }
  });
}

export async function ingestUsingDeviceId(deviceId: string, payload: ReadingInput, source = "azure") {
  const device = await prisma.device.findUnique({
    where: { deviceId },
    include: { user: true }
  });

  if (!device) {
    return null;
  }

  return prisma.waterReading.create({
    data: {
      userId: device.userId,
      deviceId: device.id,
      pulses: payload.pulses,
      liters: pulsesToLiters(payload.pulses),
      flowRate: payload.flowRate,
      capturedAt: toCapturedAt(payload.capturedAt),
      source
    }
  });
}
