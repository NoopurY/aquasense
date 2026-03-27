"use client";

type LiveTickerProps = {
  items: string[];
  className?: string;
};

export function LiveTicker({ items, className }: LiveTickerProps) {
  const tickerText = items.join("  |  ");

  return (
    <div className={`ticker-shell ${className ?? ""}`} aria-label="Live telemetry ticker">
      <div className="ticker-track">
        <span>{tickerText}</span>
        <span>{tickerText}</span>
      </div>
    </div>
  );
}
