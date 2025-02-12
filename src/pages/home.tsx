import { useNews } from '../services/news-service';

export default function Home() {
  const { nyTimesNews, isNyTimesDataLoading } = useNews();

  console.log('NY NEWS RETURN >>>', nyTimesNews);

  if (isNyTimesDataLoading) return <p>Carregando notícias</p>;

  return <p>All news</p>;
}
