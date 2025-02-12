import { useNews } from '../services/news-service';

export default function Home() {
  const {
    nyTimesNews,
    isNyTimesDataLoading,
    newsOrgNews,
    isNewsOrgDataLoading,
    theGuardianNews,
    isTheGuardianDataLoading,
  } = useNews();

  console.log('NY NEWS RETURN >>>', nyTimesNews);
  console.log('News Org NEWS RETURN >>>', newsOrgNews);
  console.log('The Guardian NEWS RETURN >>>', theGuardianNews);

  if (isNyTimesDataLoading && isNewsOrgDataLoading && isTheGuardianDataLoading) return <p>Loading news</p>;

  return <p>All news</p>;
}
