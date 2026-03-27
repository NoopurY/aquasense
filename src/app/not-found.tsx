import Link from "next/link";
import { AquaLogo } from "@/components/AquaLogo";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
      <AquaLogo compact />
      <p className="mt-8 text-xs uppercase tracking-[0.22em] text-cyan-200/70">404 - Route Not Found</p>
      <h1 className="mt-2 text-5xl font-bold">Signal Lost In The Pipeline</h1>
      <p className="mt-4 max-w-xl text-cyan-100/80">
        The requested endpoint is outside the known AquaSense network graph.
      </p>
      <div className="mt-8 flex gap-3">
        <Link className="aqua-btn px-5 py-3" href="/">
          Return Home
        </Link>
        <Link className="aqua-outline-btn px-5 py-3" href="/dashboard">
          Open Dashboard
        </Link>
      </div>
    </main>
  );
}
