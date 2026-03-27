"use client";

import { useMemo, useState } from "react";

type NodeInfo = {
  id: string;
  label: string;
  x: number;
  y: number;
  details: string;
  code: string;
  link: string;
  status: "ONLINE" | "SYNCING";
};

const nodes: NodeInfo[] = [
  {
    id: "sensor",
    label: "Flow Sensor",
    x: 8,
    y: 32,
    details: "YF-S201 pulse output sampled every 20s.",
    code: "pulseCount = readPulse(); flowRate = pulseCount / 7.5;",
    link: "https://learn.microsoft.com/azure/iot-hub/",
    status: "ONLINE"
  },
  {
    id: "esp32",
    label: "ESP32",
    x: 24,
    y: 32,
    details: "Publishes MQTT telemetry with TLS.",
    code: "client.publish(topic, payload);",
    link: "https://learn.microsoft.com/azure/iot/iot-mqtt-connect-to-iot-hub",
    status: "ONLINE"
  },
  {
    id: "hub",
    label: "Azure IoT Hub",
    x: 44,
    y: 32,
    details: "Ingestion + per-device identity management.",
    code: "devices/waterMeter_01/messages/events/",
    link: "https://learn.microsoft.com/azure/iot-hub/",
    status: "ONLINE"
  },
  {
    id: "func",
    label: "Azure Functions",
    x: 58,
    y: 18,
    details: "Forwarder and event processing stage.",
    code: "module.exports = async function (context, req) { ... }",
    link: "https://learn.microsoft.com/azure/azure-functions/",
    status: "SYNCING"
  },
  {
    id: "twin",
    label: "Device Twin",
    x: 58,
    y: 46,
    details: "Desired/reported properties and config sync.",
    code: "PATCH /twins/{id}?api-version=...",
    link: "https://learn.microsoft.com/azure/iot-hub/iot-hub-devguide-device-twins",
    status: "ONLINE"
  },
  {
    id: "db",
    label: "Cosmos DB / SQL",
    x: 74,
    y: 32,
    details: "Stores usage snapshots and billing aggregates.",
    code: "SELECT day, SUM(liters) FROM telemetry GROUP BY day",
    link: "https://learn.microsoft.com/azure/cosmos-db/",
    status: "ONLINE"
  },
  {
    id: "api",
    label: "Next.js API",
    x: 88,
    y: 32,
    details: "Serves transformed data to dashboard clients.",
    code: "GET /api/dashboard/summary",
    link: "https://nextjs.org/docs/app/building-your-application/routing/route-handlers",
    status: "ONLINE"
  }
];

const links = [
  ["sensor", "esp32"],
  ["esp32", "hub"],
  ["hub", "func"],
  ["hub", "twin"],
  ["func", "db"],
  ["twin", "db"],
  ["db", "api"]
] as const;

function findNode(id: string): NodeInfo {
  const node = nodes.find((item) => item.id === id);
  if (!node) {
    throw new Error(`Unknown node id: ${id}`);
  }
  return node;
}

export function NodeGraph() {
  const [activeNode, setActiveNode] = useState<NodeInfo | null>(null);

  const linkData = useMemo(
    () =>
      links.map(([fromId, toId]) => {
        const from = findNode(fromId);
        const to = findNode(toId);
        return {
          id: `${fromId}-${toId}`,
          x1: from.x,
          y1: from.y,
          x2: to.x,
          y2: to.y
        };
      }),
    []
  );

  return (
    <>
      <div className="glass-card overflow-hidden">
        <h3 className="mb-4 text-2xl font-semibold text-[var(--text-bright)]">IoT Architecture Graph</h3>
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-primary)]">
          <svg className="h-full w-full" viewBox="0 0 100 64" preserveAspectRatio="none" role="img" aria-label="Architecture graph">
            {linkData.map((link) => (
              <g key={link.id}>
                <line
                  x1={link.x1}
                  y1={link.y1}
                  x2={link.x2}
                  y2={link.y2}
                  stroke="rgba(0,229,255,0.25)"
                  strokeDasharray="2 1"
                  strokeWidth="0.32"
                />
                <circle r="0.8" fill="var(--cyan)">
                  <animateMotion dur="4s" repeatCount="indefinite" path={`M ${link.x1} ${link.y1} L ${link.x2} ${link.y2}`} />
                </circle>
              </g>
            ))}
            {nodes.map((node, index) => (
              <g key={node.id} style={{ animationDelay: `${index * 120}ms` }} className="node-fade-in">
                <rect
                  x={node.x - 6.2}
                  y={node.y - 3.6}
                  rx="1.8"
                  ry="1.8"
                  width="12.4"
                  height="7.2"
                  fill="rgba(8,22,40,0.95)"
                  stroke="rgba(0,229,255,0.45)"
                  strokeWidth="0.25"
                  onClick={() => setActiveNode(node)}
                  style={{ cursor: "pointer" }}
                />
                <text x={node.x} y={node.y + 0.7} fill="var(--text-bright)" fontSize="1.2" textAnchor="middle">
                  {node.label}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>

      {activeNode ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setActiveNode(null)}>
          <div className="w-full max-w-xl rounded-2xl border border-[var(--border-hover)] bg-[var(--bg-panel)] p-5 shadow-[var(--glow-md)]" onClick={(event) => event.stopPropagation()}>
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-xl font-semibold text-[var(--text-bright)]">{activeNode.label}</h4>
              <span className={`text-xs font-semibold ${activeNode.status === "ONLINE" ? "text-emerald-300" : "text-amber-300"}`}>
                {activeNode.status}
              </span>
            </div>
            <p className="text-sm text-[var(--text)]">{activeNode.details}</p>
            <pre className="mt-4 overflow-x-auto rounded-xl border border-[var(--border)] bg-[#031024] p-3 font-[var(--font-code)] text-xs text-cyan-200">
              <code>{activeNode.code}</code>
            </pre>
            <a className="mt-4 inline-flex rounded-lg border border-[var(--border-hover)] px-3 py-2 text-sm text-cyan-200 hover:bg-cyan-300/10" href={activeNode.link} target="_blank" rel="noreferrer">
              View documentation
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
