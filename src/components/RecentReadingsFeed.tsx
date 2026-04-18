"use client";

import { useEffect, useState } from "react";

type Reading = {
  id: string;
  liters: number;
  flowRate: number | null;
  capturedAt: string;
  source: string;
};

type Props = {
  userId: string;
};

export function RecentReadingsFeed({ userId }: Props) {
  const [readings, setReadings] = useState<Reading[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchReadings = async () => {
    try {
      const response = await fetch(`/api/dashboard/recent-readings`);
      if (response.ok) {
        const data = await response.json();
        setReadings(data);
      }
    } catch (error) {
      console.error("Failed to fetch readings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReadings();
    const interval = setInterval(fetchReadings, 2000); // Fetch every 2 seconds
    return () => clearInterval(interval);
  }, []);

  const getTimeAgo = (timestamp: string): string => {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now.getTime() - then.getTime();
    const diffSecs = Math.floor(diffMs / 1000);

    if (diffSecs < 60) return `${diffSecs}s ago`;
    if (diffSecs < 3600) return `${Math.floor(diffSecs / 60)}m ago`;
    return `${Math.floor(diffSecs / 3600)}h ago`;
  };

  if (loading) {
    return (
      <div className="glass-card">
        <h3 className="mb-4 text-xl font-semibold text-[var(--text-bright)]">Live Data Stream</h3>
        <div className="animate-pulse space-y-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-12 rounded-lg bg-cyan-900/20" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="glass-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[var(--text-bright)]">Live Data Stream</h3>
        <span className="inline-flex items-center gap-2 text-xs text-emerald-300">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> 
          Receiving
        </span>
      </div>

      {readings.length === 0 ? (
        <div className="py-8 text-center text-gray-400">
          <p>No readings yet. Start your ESP32 to see live data.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {readings.map((reading, index) => (
            <div
              key={reading.id}
              className={`flex items-center justify-between rounded-lg border px-4 py-3 transition-all ${
                index === 0
                  ? "border-emerald-400/50 bg-emerald-900/20 shadow-lg shadow-emerald-500/20"
                  : "border-cyan-400/20 bg-cyan-900/10"
              }`}
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg font-semibold text-cyan-300">
                    {reading.liters.toFixed(4)} L
                  </span>
                  {reading.flowRate !== null && (
                    <span className="text-sm text-gray-400">
                      @ {reading.flowRate.toFixed(2)} L/min
                    </span>
                  )}
                </div>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400">
                  <span>{reading.source}</span>
                  <span>•</span>
                  <span>{getTimeAgo(reading.capturedAt)}</span>
                  {index === 0 && (
                    <>
                      <span>•</span>
                      <span className="animate-pulse text-emerald-400">✓ Saved to Cloud</span>
                    </>
                  )}
                </div>
              </div>
              {index === 0 && (
                <div className="ml-4 rounded-full bg-emerald-500 p-2">
                  <svg
                    className="h-4 w-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 border-t border-cyan-400/10 pt-3 text-xs text-gray-400">
        <p>Showing last 5 readings • Auto-refresh every 2 seconds</p>
      </div>
    </div>
  );
}
