import React from 'react';
import { useNews } from '../../services/news-service';
import { Header } from '../../components/header';
import { NewsAggregatorSection } from '../../components/pages/home/news-aggregator-section';
import { NormalizeArticlesData } from '../../utils/normalize-articles-data';
import { ArticlesSkeleton } from '../../components/skeletons/articles-skeleton';

import NYTimesLogo from '../../assets/img/nytimes-logo.png';
import NewsApiLogo from '../../assets/img/newsapi-logo.png';
import TheGuardianLogo from '../../assets/img/theguardian-logo.png';

export default function Home() {
  const {
    nyTimesNews,
    isNyTimesDataLoading,
    newsOrgNews,
    isNewsOrgDataLoading,
    theGuardianNews,
    isTheGuardianDataLoading,
  } = useNews();

  console.log(NormalizeArticlesData(theGuardianNews));

  if (isNyTimesDataLoading && isNewsOrgDataLoading && isTheGuardianDataLoading) return <ArticlesSkeleton />;

  return (
    <React.Fragment>
      <Header />

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-6">
        <NewsAggregatorSection
          title="News API"
          logoUrl={NewsApiLogo}
          data={NormalizeArticlesData(newsOrgNews)}
          isLoading={isNewsOrgDataLoading}
        />

        <NewsAggregatorSection
          title="New York Times"
          logoUrl={NYTimesLogo}
          data={NormalizeArticlesData(nyTimesNews)}
          isLoading={isNyTimesDataLoading}
        />

        <NewsAggregatorSection
          title="The Guardian"
          logoUrl={TheGuardianLogo}
          data={NormalizeArticlesData(theGuardianNews)}
          isLoading={isTheGuardianDataLoading}
        />
      </main>
    </React.Fragment>
  );
}
