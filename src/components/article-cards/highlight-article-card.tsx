import { ArticlePreview } from '../../interfaces/article-interface';
import NoImageIllustration from '../../assets/img/no-image.png';
import { BadgeCategory } from '../badge-category';
import { timeAgo } from '../../utils/time-ago';

type HighlightArticleCardProps = {
  data?: ArticlePreview;
};

export function HighlightArticleCard({ data }: HighlightArticleCardProps) {
  if (!data) return null;

  return (
    <a href={data.redirect_url} className="group" target="_blank" rel="noopener noreferrer">
      <div className="space-y-1">
        <img
          className="mb-3 h-[330px] w-full rounded-2xl object-cover"
          alt={data.title || 'Article image'}
          src={data.img_url || NoImageIllustration}
        />
        <span className="text-xs font-bold tracking-widest text-[#16607d] uppercase">Highlight</span>
        <h2 className="text-2xl leading-6 font-bold underline-offset-2 group-hover:underline">
          {data.title}
          {data.category && <BadgeCategory category={data.category} />}
        </h2>
        <p>{data.description}</p>
        <div className="flex items-center">
          <div className="text-xs text-slate-400 first-letter:uppercase">
            {timeAgo(data.pub_date.toString())}, by <span className="font-medium">{data.author || 'Unknown'}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
