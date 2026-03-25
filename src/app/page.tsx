import Link from "next/link";
import { AquaLogo } from "@/components/AquaLogo";

const problems = [
  { title: "Manual Meter Reading", text: "No more monthly manual readings and delayed bill cycles." },
  { title: "Billing Errors", text: "Automated slab billing with transparent usage breakdown." },
  { title: "No Real-Time Data", text: "Live telemetry from your ESP32 flow-meter setup." },
  { title: "Water Wastage", text: "Minute-level flow visibility helps detect leak patterns quickly." }
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-6 md:px-8 md:py-10">
      <nav className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-cyan-900/40 pb-5">
        <AquaLogo compact />
        <div className="flex items-center gap-3 text-sm font-semibold">
          <Link className="rounded-full border border-cyan-400/50 px-4 py-2 text-cyan-200 hover:bg-cyan-500/10" href="/login">
            Login
          </Link>
          <Link className="rounded-full bg-cyan-400 px-4 py-2 text-slate-950 hover:bg-cyan-300" href="/signup">
            Live Demo
          </Link>
        </div>
      </nav>

      <section className="glass-card relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">Smart Water Meter with Cloud-Based Billing</h1>
            <p className="mb-7 max-w-xl text-cyan-100/90 md:text-lg">
              IoT powered intelligent water monitoring using ESP32 and Microsoft Azure event pipelines.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link className="rounded-lg bg-gradient-to-r from-cyan-300 to-blue-500 px-5 py-3 font-semibold text-slate-950" href="/signup">
                Explore System Architecture
              </Link>
              <Link className="rounded-lg border border-cyan-300/60 px-5 py-3 font-semibold text-cyan-100" href="/dashboard">
                View Live Dashboard
              </Link>
            </div>
          </div>
          <div className="glass-card">
            <h3 className="mb-3 text-2xl font-semibold">System Architecture</h3>
            <div className="grid grid-cols-2 gap-3 text-sm md:grid-cols-3">
              {["Flow Sensor", "ESP32", "Wi-Fi", "Azure IoT Hub", "Azure Functions", "Billing Engine"].map((item) => (
                <div className="rounded-xl border border-cyan-800/50 bg-slate-950/40 p-3 text-center" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="wave-divider my-8" />

      <section>
        <h2 className="mb-5 text-center text-3xl font-bold">Why Smart Water Monitoring?</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <article className="glass-card" key={problem.title}>
              <h3 className="mb-1 text-lg font-semibold">{problem.title}</h3>
              <p className="text-cyan-100/80">{problem.text}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
