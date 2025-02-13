import moment from 'moment';
import { ArticlePreview } from '../../interfaces/article-interface';
import { BadgeCategory } from '../badge-category';

type SecondaryHighlightArticleCardProps = {
  data?: ArticlePreview;
};

export function SecondaryHighlightArticleCard({ data }: SecondaryHighlightArticleCardProps) {
  return (
    data && (
      <a href={data.redirect_url} className="group" target="_blank">
        <div className="space-y-2">
          <h2 className="text-2xl leading-6 font-bold underline-offset-2 group-hover:underline">
            {data.title}
            {data.category && <BadgeCategory category={data.category} />}
          </h2>

          <p className="text-sm">{data.description}</p>
          <div className="flex items-center">
            <div className="text-xs text-slate-400 first-letter:uppercase">
              {moment(data.pub_date).fromNow()}, by{' '}
              <span className="font-medium">{data.author ? data.author : 'Unknown'}</span>
            </div>
          </div>
        </div>
      </a>
    )
  );
}
