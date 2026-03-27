module.exports = async function (context, events) {
  const endpoint = process.env.APP_ENDPOINT;
  const webhookKey = process.env.WEBHOOK_KEY;

  if (!endpoint || !webhookKey) {
    context.log.error("Missing APP_ENDPOINT or WEBHOOK_KEY app settings.");
    return;
  }

  const batch = Array.isArray(events) ? events : [events];

  const payload = batch
    .map((msg) => {
      if (typeof msg !== "object" || msg === null) {
        return null;
      }

      const deviceId =
        msg.deviceId ||
        msg?.systemProperties?.["iothub-connection-device-id"] ||
        msg?.properties?.deviceId;

      const pulses = Number(msg.pulses);
      const flowRate = msg.flowRate !== undefined ? Number(msg.flowRate) : undefined;

      if (!deviceId || !Number.isInteger(pulses) || pulses < 0) {
        return null;
      }

      return {
        deviceId: String(deviceId),
        pulses,
        flowRate: Number.isFinite(flowRate) ? flowRate : undefined,
        capturedAt: msg.capturedAt || new Date().toISOString()
      };
    })
    .filter(Boolean);

  if (!payload.length) {
    context.log.warn("No valid events to forward.");
    return;
  }

  try {
    const https = require("https");
    const url = new URL(endpoint);
    
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-webhook-key": webhookKey,
        "Content-Length": Buffer.byteLength(JSON.stringify(payload))
      }
    };

    await new Promise((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => { data += chunk; });
        res.on("end", () => {
          context.log(`Forward result: ${res.statusCode} ${data}`);
          resolve();
        });
      });
      req.on("error", reject);
      req.write(JSON.stringify(payload));
      req.end();
    });
  } catch (error) {
    context.log.error("Failed to forward telemetry batch.", error);
  }
};
