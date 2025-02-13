import { Skeleton } from './skeleton';

export function ArticlesSkeleton() {
  const HighlightCardSkeleton = () => (
    <div className="space-y-2">
      <Skeleton className="h-[330px] w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-[80%]" />
    </div>
  );

  const SecondaryHighlightCardSkeleton = () => (
    <div className="space-y-2">
      <Skeleton className="h-[150px] w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-[80%]" />
    </div>
  );

  const RegularCardSkeleton = () => (
    <div className="space-y-2">
      <Skeleton className="h-[100px] w-full" />
      <Skeleton className="h-5 w-full" />
      <Skeleton className="h-5 w-[80%]" />
    </div>
  );

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-5 py-6">
      {new Array(3).fill(null).map((_, index) => (
        <div key={`article-section-skeleton_${index}`}>
          <div className="mb-6 flex items-center space-x-6">
            <Skeleton className="h-[50px] w-[150px]" />
            <div className="flex-1 border-b border-slate-200" />
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
              <div className="col-span-1 md:col-span-7">
                <HighlightCardSkeleton />
              </div>
              <div className="col-span-1 md:col-span-5">
                <div className="space-y-6">
                  <SecondaryHighlightCardSkeleton />

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <RegularCardSkeleton />
                    <RegularCardSkeleton />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
              <RegularCardSkeleton />
              <RegularCardSkeleton />
              <RegularCardSkeleton />
              <RegularCardSkeleton />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
