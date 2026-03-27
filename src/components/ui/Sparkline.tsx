type SparklineProps = {
  points: number[];
  width?: number;
  height?: number;
  className?: string;
};

export function Sparkline({ points, width = 120, height = 40, className }: SparklineProps) {
  if (points.length < 2) {
    return <svg className={className} height={height} width={width} />;
  }

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = Math.max(1, max - min);

  const path = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * (height - 4) - 2;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");

  return (
    <svg className={className} height={height} viewBox={`0 0 ${width} ${height}`} width={width}>
      <defs>
        <linearGradient id="sparklineGradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="var(--cyan-dim)" />
          <stop offset="100%" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <path d={path} fill="none" stroke="url(#sparklineGradient)" strokeLinecap="round" strokeWidth="2.2" />
    </svg>
  );
}
