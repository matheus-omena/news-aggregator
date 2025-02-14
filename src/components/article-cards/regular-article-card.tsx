import { ArticlePreview } from '../../interfaces/article-interface';
import { timeAgo } from '../../utils/time-ago';
import { BadgeCategory } from '../badge-category';

type RegularArticleCardProps = {
  data?: ArticlePreview;
};

export function RegularArticleCard({ data }: RegularArticleCardProps) {
  if (!data) return null;

  return (
    <a href={data.redirect_url} className="group" target="_blank" rel="noopener noreferrer">
      <div className="space-y-2">
        {data.img_url && (
          <img
            className="mb-3 h-[100px] w-full rounded-lg object-cover shadow-sm"
            alt={`Article image: ${data.title}`}
            src={data.img_url}
          />
        )}
        <h2 className="text-lg leading-6 font-bold underline-offset-2 group-hover:underline">
          {data.title}
          {data.category && <BadgeCategory category={data.category} />}
        </h2>
        <p className="text-sm">{data.description}</p>
        <div className="flex items-center">
          <div className="text-xs text-slate-400 first-letter:uppercase">
            {timeAgo(data.pub_date.toString())}, by <span className="font-medium">{data.author || 'Unknown'}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
