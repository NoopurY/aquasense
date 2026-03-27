"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AquaLogo } from "@/components/AquaLogo";
import { Navbar } from "@/components/Navbar";
import { LiveTicker } from "@/components/ui/LiveTicker";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error ?? "Unable to login.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main>
      <LiveTicker
        items={[
          "Authentication Node: ONLINE",
          "Azure IoT Hub: CONNECTED",
          "Telemetry sync: 2s ago",
          "Security mode: JWT + HttpOnly"
        ]}
      />
      <Navbar showAuth={false} />

      <section className="mx-auto grid min-h-[78vh] w-full max-w-6xl items-center gap-6 px-5 py-10 lg:grid-cols-2">
        <article className="glass-card hidden lg:block">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/75">Mission Access</p>
          <h1 className="mt-2 text-5xl font-bold">Welcome To AquaSense Control</h1>
          <p className="mt-4 text-cyan-100/80">
            Authenticate to access live flow telemetry, smart slab billing intelligence, and real-time IoT operations.
          </p>
          <div className="mt-6 space-y-3 text-sm text-cyan-100/85">
            <p>{"Signal Path: Flow Sensor -> ESP32 -> Azure IoT Hub -> Dashboard"}</p>
            <p>Security Layer: Password Hashing + Signed JWT Sessions</p>
            <p>Live Status: All ingestion pipelines operational</p>
          </div>
        </article>

        <section className="glass-card fade-up w-full max-w-md justify-self-center">
          <div className="mb-6 flex justify-center">
            <AquaLogo />
          </div>
          <p className="mb-2 text-center text-xs uppercase tracking-[0.2em] text-cyan-200/75">Secure Access</p>
          <h2 className="mb-5 text-center text-3xl font-bold">Welcome Back</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <label className="block text-sm text-cyan-100/90">
              Email
              <input
                className="mt-2 w-full rounded-lg border border-cyan-300/30 bg-slate-900/70 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                type="email"
                value={email}
              />
            </label>
            <label className="block text-sm text-cyan-100/90">
              Password
              <input
                className="mt-2 w-full rounded-lg border border-cyan-300/30 bg-slate-900/70 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
                minLength={8}
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                value={password}
              />
            </label>
            {error ? <p className="rounded-md border border-rose-400/30 bg-rose-500/10 px-3 py-2 text-sm text-rose-300">{error}</p> : null}
            <button className="aqua-btn w-full px-4 py-3" disabled={loading} type="submit">
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>
          <p className="mt-5 text-center text-sm text-cyan-100/80">
            New here?{" "}
            <Link className="font-semibold text-cyan-300" href="/signup">
              Create an account
            </Link>
          </p>
        </section>
      </section>
    </main>
  );
}
