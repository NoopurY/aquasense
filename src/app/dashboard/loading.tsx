import { SkeletonLoader } from "@/components/ui/SkeletonLoader";

export default function DashboardLoading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-8 md:px-8">
      <section className="glass-card mb-6">
        <SkeletonLoader rows={2} />
      </section>
      <section className="mb-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <article className="metric-card" key={idx}>
            <SkeletonLoader rows={3} />
          </article>
        ))}
      </section>
      <section className="glass-card">
        <SkeletonLoader rows={8} />
      </section>
    </main>
  );
}
