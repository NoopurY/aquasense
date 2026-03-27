"use client";

type WaterTankProps = {
  value: number;
  max: number;
  className?: string;
};

export function WaterTank({ value, max, className }: WaterTankProps) {
  const ratio = Math.max(0, Math.min(1, value / Math.max(1, max)));
  const fillPercent = Math.round(ratio * 100);

  const fillColor = ratio < 0.4 ? "var(--blue)" : ratio < 0.75 ? "var(--cyan)" : "#7c4dff";

  return (
    <div className={`water-tank ${className ?? ""}`}>
      <div className="water-tank-shell">
        <div className="water-threshold threshold-1">8 KL</div>
        <div className="water-threshold threshold-2">20 KL</div>
        <div className="water-fill" style={{ height: `${fillPercent}%`, backgroundColor: fillColor }}>
          <div className="water-wave" />
        </div>
      </div>
      <p className="mt-3 text-center text-sm uppercase tracking-[0.18em] text-cyan-100/70">{fillPercent}% Filled</p>
    </div>
  );
}
