import { ArticlePreview } from '../../../interfaces/article-interface';
import { HighlightArticleCard } from '../../article-cards/highlight-article-card';
import { RegularArticleCard } from '../../article-cards/regular-article-card';
import { SecondaryHighlightArticleCard } from '../../article-cards/secondary-highlight-article-card';
import { ArticlesSkeleton } from '../../skeletons/articles-skeleton';

type NewsAggregatorSectionProps = {
  title: string;
  logoUrl: string;
  data?: ArticlePreview[];
  isLoading: boolean;
};

export function NewsAggregatorSection({ title, logoUrl, data, isLoading }: NewsAggregatorSectionProps) {
  if (isLoading) return <ArticlesSkeleton />;
  return (
    <section aria-label={`${title} articles section`}>
      <div className="mb-6 flex items-center space-x-6">
        <img src={logoUrl} className="w-[100px] md:w-[150px]" alt={`Logo ${title}`} />
        <div className="flex-1 border-b border-slate-200" />
      </div>

      {data && data.length > 0 ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            <div className="col-span-1 lg:col-span-7">
              <HighlightArticleCard data={data[0]} />
            </div>
            <div className="col-span-1 lg:col-span-5">
              <SecondaryHighlightArticleCard data={data[1]} />

              <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
                <RegularArticleCard data={data[2]} />
                <RegularArticleCard data={data[3]} />
              </div>
            </div>
          </div>

          {data.length >= 4 && (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {data.slice(4).map((article) => (
                <RegularArticleCard key={article.title} data={article} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <p className="text-slate-400">No news with the search term.</p>
        </div>
      )}
    </section>
  );
}
