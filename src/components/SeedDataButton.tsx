"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function SeedDataButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function generateDemoData() {
    setLoading(true);
    await fetch("/api/telemetry/simulate", { method: "POST" });
    router.refresh();
    setLoading(false);
  }

  return (
    <button
      className="rounded-full bg-gradient-to-r from-cyan-300 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950"
      disabled={loading}
      onClick={generateDemoData}
      type="button"
    >
      {loading ? "Generating..." : "Generate Demo Data"}
    </button>
  );
}
