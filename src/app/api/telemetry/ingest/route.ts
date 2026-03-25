import { NextResponse } from "next/server";
import { z } from "zod";
import { ingestUsingDeviceToken } from "@/lib/ingest";

const payloadSchema = z.object({
  pulses: z.number().int().nonnegative(),
  flowRate: z.number().nonnegative().optional(),
  capturedAt: z.string().optional()
});

function extractToken(request: Request): string | null {
  const bearer = request.headers.get("authorization");
  if (bearer && bearer.toLowerCase().startsWith("bearer ")) {
    return bearer.slice(7).trim();
  }

  const headerToken = request.headers.get("x-device-token");
  return headerToken?.trim() ?? null;
}

export async function POST(request: Request) {
  try {
    const token = extractToken(request);
    if (!token) {
      return NextResponse.json({ error: "Missing device token." }, { status: 401 });
    }

    const body = await request.json();
    const parsed = payloadSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid telemetry payload." }, { status: 400 });
    }

    const reading = await ingestUsingDeviceToken(token, parsed.data, "esp32");
    if (!reading) {
      return NextResponse.json({ error: "Invalid device credentials." }, { status: 403 });
    }

    return NextResponse.json({ ok: true, readingId: reading.id, liters: reading.liters });
  } catch {
    return NextResponse.json({ error: "Failed to ingest telemetry." }, { status: 500 });
  }
}
