import moment from 'moment';
import { ArticlePreview } from '../interfaces/article-interface';
import { NewsOrgArticle } from '../interfaces/neworgs-interface';
import { NyTimesArticle } from '../interfaces/nytimes-interface';
import { TheGuardianArticle } from '../interfaces/theguardian-interface';

export function NormalizeArticlesData(
  data?: NyTimesArticle[] | NewsOrgArticle[] | TheGuardianArticle[],
): ArticlePreview[] {
  const final_data: ArticlePreview[] = [];

  if (data)
    data.map((article) =>
      final_data.push({
        title:
          (article as NyTimesArticle).headline?.main ||
          (article as NewsOrgArticle).title ||
          (article as TheGuardianArticle).webTitle,
        description: (article as NyTimesArticle).snippet || (article as NewsOrgArticle).description || '',
        img_url: (article as NewsOrgArticle).urlToImage || undefined,
        redirect_url:
          (article as NyTimesArticle).web_url ||
          (article as NewsOrgArticle).url ||
          (article as TheGuardianArticle).webUrl,
        pub_date: moment(
          (article as NyTimesArticle).pub_date ||
            (article as NewsOrgArticle).publishedAt ||
            (article as TheGuardianArticle).webPublicationDate,
        )
          .utc()
          .toDate(),
        author:
          (article as NyTimesArticle).byline?.person?.map((p) => `${p.firstname} ${p.lastname}`).join(', ') ||
          (article as NewsOrgArticle).author ||
          undefined,
        category:
          (article as NyTimesArticle).subsection_name || (article as TheGuardianArticle).sectionName || undefined,
      }),
    );

  return final_data;
}
