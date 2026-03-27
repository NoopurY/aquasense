"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { AquaLogo } from "@/components/AquaLogo";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setLoading(true);

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, email, password })
    });

    const payload = await response.json();

    if (!response.ok) {
      setError(payload.error ?? "Unable to create account.");
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md items-center px-5 py-8">
      <section className="glass-card fade-up w-full">
        <div className="mb-6 flex justify-center">
          <AquaLogo />
        </div>
        <p className="mb-2 text-center text-xs uppercase tracking-[0.2em] text-cyan-200/75">Quick Onboarding</p>
        <h1 className="mb-5 text-center text-3xl font-bold">Create AquaSave Account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block text-sm text-cyan-100/90">
            Full Name
            <input
              className="mt-2 w-full rounded-lg border border-cyan-300/30 bg-slate-900/70 px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your full name"
              required
              value={fullName}
            />
          </label>
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
          {error ? <p className="text-sm text-rose-300">{error}</p> : null}
          <button className="aqua-btn w-full px-4 py-3" disabled={loading} type="submit">
            {loading ? "Creating account..." : "Sign Up"}
          </button>
        </form>
        <p className="mt-5 text-center text-sm text-cyan-100/80">
          Already registered?{" "}
          <Link className="font-semibold text-cyan-300" href="/login">
            Login
          </Link>
        </p>
      </section>
    </main>
  );
}
