"use client";

import { useMemo, useState } from "react";

type HeatmapCell = {
  day: number;
  hour: number;
  value: number;
};

type HeatmapChartProps = {
  title?: string;
};

function buildHeatmapData(): HeatmapCell[] {
  const cells: HeatmapCell[] = [];
  for (let day = 0; day < 7; day += 1) {
    for (let hour = 0; hour < 24; hour += 1) {
      const base = Math.max(0, Math.sin((hour / 24) * Math.PI * 2 - 1.2));
      const eveningBoost = hour >= 18 && hour <= 22 ? 0.35 : 0;
      const dayVariance = (day % 3) * 0.08;
      const noise = ((day * 17 + hour * 13) % 10) / 55;
      const value = Number((base + eveningBoost + dayVariance + noise).toFixed(2));
      cells.push({ day, hour, value });
    }
  }
  return cells;
}

function colorFor(value: number): string {
  if (value < 0.2) return "rgba(30, 144, 255, 0.20)";
  if (value < 0.4) return "rgba(0, 184, 204, 0.35)";
  if (value < 0.6) return "rgba(0, 229, 255, 0.55)";
  if (value < 0.8) return "rgba(0, 229, 255, 0.75)";
  return "rgba(255, 179, 0, 0.90)";
}

const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function HeatmapChart({ title = "Hourly Usage Heatmap" }: HeatmapChartProps) {
  const [hovered, setHovered] = useState<HeatmapCell | null>(null);
  const data = useMemo(() => buildHeatmapData(), []);

  return (
    <section className="glass-card">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-[var(--text-bright)]">{title}</h3>
        {hovered ? (
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">
            {dayLabels[hovered.day]} {hovered.hour}:00 - {(hovered.value * 10).toFixed(2)} L
          </p>
        ) : (
          <p className="text-xs uppercase tracking-[0.14em] text-cyan-200/70">Hover cells to inspect usage</p>
        )}
      </div>
      <div className="overflow-x-auto">
        <div className="grid min-w-[560px] grid-cols-[auto_repeat(24,minmax(18px,1fr))] gap-1.5">
          <div />
          {Array.from({ length: 24 }).map((_, hour) => (
            <div className="text-center text-[10px] text-cyan-200/60" key={hour}>
              {hour}
            </div>
          ))}

          {dayLabels.map((label, day) => (
            <div className="contents" key={label}>
              <div key={`${label}-label`} className="pr-2 text-right text-xs text-cyan-100/75">
                {label}
              </div>
              {data
                .filter((cell) => cell.day === day)
                .map((cell) => (
                  <button
                    aria-label={`${label} ${cell.hour}:00 usage ${(cell.value * 10).toFixed(2)} liters`}
                    className="h-5 rounded-[4px] border border-cyan-100/10 transition-transform duration-150 hover:scale-110"
                    key={`${label}-${cell.hour}`}
                    onMouseEnter={() => setHovered(cell)}
                    style={{ background: colorFor(cell.value) }}
                    type="button"
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
