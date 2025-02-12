export interface NewsOrgApiResponse {
  status: string;
  totalResults: number;
  articles: NewsOrgArticle[];
}

export interface NewsOrgArticle {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}
