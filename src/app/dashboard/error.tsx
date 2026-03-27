"use client";

type DashboardErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function DashboardError({ error, reset }: DashboardErrorProps) {
  return (
    <main className="mx-auto max-w-4xl px-5 py-10 md:px-8">
      <section className="glass-card border-red-400/45">
        <p className="text-xs uppercase tracking-[0.2em] text-red-300">Dashboard Error</p>
        <h1 className="mt-2 text-3xl font-semibold">Telemetry panel could not load</h1>
        <p className="mt-3 text-sm text-cyan-100/80">{error.message}</p>
        <button className="aqua-btn mt-6 px-4 py-2" onClick={reset} type="button">
          Retry
        </button>
      </section>
    </main>
  );
}
