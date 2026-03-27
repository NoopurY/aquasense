import { SkeletonLoader } from "@/components/ui/SkeletonLoader";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-8">
      <section className="glass-card">
        <div className="mb-5 h-8 w-64 rounded bg-cyan-200/10" />
        <SkeletonLoader rows={5} />
      </section>
      <section className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="glass-card">
          <SkeletonLoader rows={4} />
        </div>
        <div className="glass-card">
          <SkeletonLoader rows={4} />
        </div>
        <div className="glass-card">
          <SkeletonLoader rows={4} />
        </div>
      </section>
    </main>
  );
}
