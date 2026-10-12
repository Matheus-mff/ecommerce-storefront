export function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <div className="aspect-square animate-pulse bg-zinc-200" />

      <div className="p-5">
        <div className="h-4 w-16 animate-pulse rounded bg-zinc-200" />

        <div className="mt-3 h-5 w-3/4 animate-pulse rounded bg-zinc-200" />

        <div className="mt-4 space-y-2">
          <div className="h-4 w-full animate-pulse rounded bg-zinc-200" />
          <div className="h-4 w-2/3 animate-pulse rounded bg-zinc-200" />
        </div>

        <div className="mt-5 h-5 w-20 animate-pulse rounded bg-zinc-200" />
      </div>
    </div>
  );
}
