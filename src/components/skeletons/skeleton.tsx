export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`animate-pulse rounded-lg bg-slate-100 ${className}`} {...props} />;
}
