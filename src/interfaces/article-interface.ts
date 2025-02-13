export interface ArticlePreview {
  title: string;
  description: string;
  img_url?: string;
  redirect_url: string;
  pub_date: Date;
  author?: string;
  category?: string;
}
