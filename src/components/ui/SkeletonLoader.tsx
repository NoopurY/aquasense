type SkeletonLoaderProps = {
  rows?: number;
  className?: string;
};

export function SkeletonLoader({ rows = 3, className }: SkeletonLoaderProps) {
  return (
    <div className={className}>
      {Array.from({ length: rows }).map((_, index) => (
        <div className="skeleton-line mb-3 last:mb-0" key={index} />
      ))}
    </div>
  );
}
