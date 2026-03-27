"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { CountUp } from "@/components/ui/CountUp";
import { LiveTicker } from "@/components/ui/LiveTicker";
import { NodeGraph } from "@/components/ui/NodeGraph";
import { Sparkline } from "@/components/ui/Sparkline";
import { TiltCard } from "@/components/ui/TiltCard";
import { WaterTank } from "@/components/ui/WaterTank";

const titleTarget = "Smart Water Meter";

const statCards = [
  { title: "Realtime Flow", value: 3.24, suffix: " L/min", points: [1.9, 2.3, 2.8, 3.1, 2.9, 3.24] },
  { title: "Network Usage", value: 45230, suffix: " KL", points: [33120, 35680, 38810, 41020, 43890, 45230] },
  { title: "Active Devices", value: 3, suffix: " units", points: [2, 2, 3, 3, 3, 3] }
];

type TelemetryPacket = {
  flowRate: number;
  totalLiters: number;
  timestamp: string;
};

export default function HomePage() {
  const [typed, setTyped] = useState("");
  const [usageRange, setUsageRange] = useState<[number, number]>([5, 22]);
  const [packet, setPacket] = useState<TelemetryPacket>({
    flowRate: 3.24,
    totalLiters: 125.6,
    timestamp: new Date().toISOString()
  });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let index = 0;
    const id = window.setInterval(() => {
      index += 1;
      setTyped(titleTarget.slice(0, index));
      if (index >= titleTarget.length) {
        window.clearInterval(id);
      }
    }, 90);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setPacket((prev) => {
        const flowRate = Number((2 + Math.random() * 2.4).toFixed(2));
        const totalLiters = Number((prev.totalLiters + flowRate * 1.1).toFixed(2));
        return { flowRate, totalLiters, timestamp: new Date().toISOString() };
      });
    }, 2000);

    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 48 }).map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5
    }));

    let raf = 0;
    const draw = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "rgba(0, 229, 255, 0.7)";

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;
        context.beginPath();
        context.arc(particle.x, particle.y, 1.2, 0, Math.PI * 2);
        context.fill();
      }

      context.strokeStyle = "rgba(0,229,255,0.22)";
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 95) {
            context.globalAlpha = 1 - dist / 95;
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.stroke();
            context.globalAlpha = 1;
          }
        }
      }

      raf = window.requestAnimationFrame(draw);
    };

    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const usageForBill = useMemo(() => (usageRange[0] + usageRange[1]) / 2, [usageRange]);
  const baseBill = useMemo(() => {
    const slab1 = Math.min(usageForBill, 8) * 5;
    const slab2 = Math.min(Math.max(usageForBill - 8, 0), 12) * 10;
    const slab3 = Math.max(usageForBill - 20, 0) * 20;
    return slab1 + slab2 + slab3;
  }, [usageForBill]);

  const yearlySavings = useMemo(() => baseBill * 0.2 * 12, [baseBill]);

  return (
    <main>
      <LiveTicker
        items={[
          `waterMeter_01 -> ${packet.flowRate.toFixed(2)} L/min`,
          "Device_02 -> 1.80 L/min",
          "Azure IoT Hub: CONNECTED",
          "Last sync: 2s ago",
          "Total Network Usage: 45,230 KL",
          "Active Devices: 3"
        ]}
      />
      <Navbar />

      <section className="relative mx-auto mt-6 max-w-7xl px-5 pb-16 md:px-8" id="hero">
        <div className="glass-card relative min-h-[70vh] overflow-hidden">
          <div className="hero-ripple" />
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-50" />
          <div className="absolute inset-y-0 right-[-8%] my-auto h-[320px] w-[320px] rounded-full border border-cyan-300/35 bg-cyan-400/8 blur-[1px]" />

          <div className="relative z-10 grid items-center gap-8 lg:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">AquaSense Mission Control</p>
              <h1 className="mt-3 text-5xl font-bold leading-tight md:text-7xl">
                {typed}
                <span className="typewriter-cursor">|</span>
              </h1>
              <p className="mt-4 max-w-xl text-base text-[var(--text)] md:text-lg">
                Sensor to cloud telemetry intelligence with cinematic observability, high-precision slab billing, and live
                dashboard visibility.
              </p>

              <svg className="mt-6 h-20 w-full max-w-xl" viewBox="0 0 640 120" aria-label="Sensor flow path">
                <path className="data-flow-path" d="M20 60 C120 10, 220 110, 320 60 S520 10, 620 60" />
                <circle fill="var(--cyan)" r="6">
                  <animateMotion dur="3.6s" path="M20 60 C120 10, 220 110, 320 60 S520 10, 620 60" repeatCount="indefinite" />
                </circle>
              </svg>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/dashboard" className="aqua-btn ripple-click px-5 py-3">
                  Open Live Dashboard
                </Link>
                <Link href="/signup" className="aqua-outline-btn ripple-click px-5 py-3 font-semibold">
                  Connect Device
                </Link>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {statCards.map((card, index) => (
                <article
                  className="glass-card relative border border-[var(--border-hover)] bg-[rgba(5,18,34,0.74)]"
                  key={card.title}
                  style={{ animationDelay: `${index * 120}ms` }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-200/70">{card.title}</p>
                  <CountUp
                    className="kpi-number mt-1 block text-2xl"
                    decimals={card.value > 10 ? 0 : 2}
                    suffix={card.suffix}
                    value={card.value}
                  />
                  <Sparkline className="mt-2 w-full" points={card.points} width={160} />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 md:px-8" id="architecture">
        <NodeGraph />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 pb-14 lg:grid-cols-2 md:px-8">
        <article className="glass-card">
          <h3 className="mb-3 text-2xl">Live JSON Packet</h3>
          <pre className="mono-code overflow-x-auto rounded-xl border border-[var(--border)] bg-[#020f22] p-4 text-sm leading-7 text-cyan-100">
            <code>{`{
  "device_id": "waterMeter_01",
  "flow_rate": ${packet.flowRate.toFixed(2)},
  "total_liters": ${packet.totalLiters.toFixed(2)},
  "timestamp": "${packet.timestamp}",
  "valve_status": "OPEN",
  "temperature": 24.5
}`}</code>
          </pre>
          <p className="mt-3 text-xs uppercase tracking-[0.18em] text-cyan-200">devices/waterMeter_01/messages/events/</p>
        </article>

        <article className="glass-card">
          <h3 className="mb-4 text-2xl">Telemetry Pipeline</h3>
          <ol className="space-y-3 text-sm">
            {["ESP32 Pulse", "MQTT/TLS Transmission", "Azure IoT Hub", "Database Write"].map((stage, idx) => (
              <li className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[rgba(7,22,40,0.65)] p-3" key={stage}>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border-hover)] text-cyan-100">
                  {idx + 1}
                </span>
                <span>{stage}</span>
              </li>
            ))}
          </ol>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 md:px-8" id="billing">
        <div className="glass-card">
          <h3 className="text-3xl">Premium Billing Calculator</h3>
          <p className="mt-1 text-sm text-cyan-100/80">Set expected monthly consumption range and view cost outlook.</p>

          <div className="mt-6 grid gap-8 lg:grid-cols-[220px_1fr]">
            <WaterTank max={30} value={usageForBill} />

            <div>
              <div className="grid gap-4 md:grid-cols-2">
                <label className="text-sm">
                  <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-cyan-200/75">Minimum Usage (KL)</span>
                  <input
                    className="w-full accent-cyan-300"
                    max={usageRange[1]}
                    min={0}
                    onChange={(event) => setUsageRange([Number(event.target.value), usageRange[1]])}
                    type="range"
                    value={usageRange[0]}
                  />
                </label>
                <label className="text-sm">
                  <span className="mb-2 block text-xs uppercase tracking-[0.16em] text-cyan-200/75">Maximum Usage (KL)</span>
                  <input
                    className="w-full accent-cyan-300"
                    max={30}
                    min={usageRange[0]}
                    onChange={(event) => setUsageRange([usageRange[0], Number(event.target.value)])}
                    type="range"
                    value={usageRange[1]}
                  />
                </label>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <article className="metric-card">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/75">Expected Bill</p>
                  <CountUp className="kpi-number mt-1 block text-3xl" prefix="Rs " value={baseBill} />
                </article>
                <article className="metric-card">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/75">Monthly Savings @20%</p>
                  <CountUp className="kpi-number mt-1 block text-3xl" prefix="Rs " value={baseBill * 0.2} />
                </article>
                <article className="metric-card">
                  <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/75">Yearly Savings</p>
                  <CountUp className="kpi-number mt-1 block text-3xl" prefix="Rs " value={yearlySavings} />
                </article>
              </div>

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  { label: "Your Usage", value: usageForBill, color: "from-cyan-400 to-cyan-600" },
                  { label: "Mumbai Average", value: 17.4, color: "from-blue-400 to-blue-600" },
                  { label: "Conservation Target", value: 11.2, color: "from-emerald-400 to-emerald-600" }
                ].map((bar) => (
                  <article className="rounded-xl border border-[var(--border)] bg-[rgba(8,22,40,0.65)] p-3" key={bar.label}>
                    <p className="text-xs uppercase tracking-[0.16em] text-cyan-100/70">{bar.label}</p>
                    <div className="mt-2 h-2 w-full rounded bg-slate-800">
                      <div className={`h-2 rounded bg-gradient-to-r ${bar.color}`} style={{ width: `${Math.min(100, (bar.value / 30) * 100)}%` }} />
                    </div>
                    <p className="mt-2 text-sm text-cyan-100">{bar.value.toFixed(1)} KL</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 md:px-8">
        <h3 className="mb-4 text-3xl">Technology Stack Radar</h3>
        <div className="grid gap-4 lg:grid-cols-4">
          {[
            { name: "ESP32", version: "v3", reason: "Reliable low-power edge telemetry", icon: "microcontroller" },
            { name: "Azure IoT Hub", version: "P1", reason: "Secure identity-driven ingestion", icon: "cloud" },
            { name: "Next.js", version: "16", reason: "Fast app routing with server actions", icon: "frontend" },
            { name: "MQTT/TLS", version: "3.1.1", reason: "Efficient, resilient sensor protocol", icon: "protocol" }
          ].map((tech) => (
            <TiltCard className="glass-card" key={tech.name}>
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200/75">{tech.icon}</p>
              <h4 className="mt-1 text-xl font-semibold">{tech.name}</h4>
              <span className="mt-2 inline-flex rounded-full border border-[var(--border-hover)] px-2 py-1 text-xs text-cyan-100">
                {tech.version}
              </span>
              <p className="mt-3 text-sm text-cyan-100/80">{tech.reason}</p>
            </TiltCard>
          ))}
        </div>
      </section>
    </main>
  );
}
