import { NextResponse } from "next/server";
import { z } from "zod";
import { ingestUsingDeviceId } from "@/lib/ingest";

const eventSchema = z.object({
  deviceId: z.string().min(3),
  pulses: z.number().int().nonnegative(),
  flowRate: z.number().nonnegative().optional(),
  capturedAt: z.string().optional()
});

const batchSchema = z.array(
  z.object({
    body: z.unknown().optional(),
    data: z.unknown().optional()
  }).passthrough()
);

export async function POST(request: Request) {
  const webhookKey = process.env.AZURE_IOT_WEBHOOK_KEY;
  const incomingKey = request.headers.get("x-webhook-key") ?? request.headers.get("x-functions-key");

  if (!webhookKey || incomingKey !== webhookKey) {
    return NextResponse.json({ error: "Unauthorized webhook." }, { status: 401 });
  }

  try {
    const body = await request.json();

    const events = Array.isArray(body) ? body : [body];
    const parsedBatch = batchSchema.safeParse(events);

    if (!parsedBatch.success) {
      return NextResponse.json({ error: "Invalid Azure payload." }, { status: 400 });
    }

    let processed = 0;

    for (const event of parsedBatch.data) {
      const candidate = event.body ?? event.data ?? event;
      const parsedEvent = eventSchema.safeParse(candidate);
      if (!parsedEvent.success) {
        continue;
      }

      const reading = await ingestUsingDeviceId(parsedEvent.data.deviceId, parsedEvent.data, "azure-iot");
      if (reading) {
        processed += 1;
      }
    }

    return NextResponse.json({ ok: true, processed });
  } catch {
    return NextResponse.json({ error: "Azure ingestion failed." }, { status: 500 });
  }
}
