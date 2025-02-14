import React from 'react';
import { useNews } from '../../services/news-service';
import { Header } from '../../components/header';
import { NewsAggregatorSection } from '../../components/pages/home/news-aggregator-section';
import { NormalizeArticlesData } from '../../utils/normalize-articles-data';
import { ArticlesSkeleton } from '../../components/skeletons/articles-skeleton';

import NYTimesLogo from '../../assets/img/nytimes-logo.png';
import NewsApiLogo from '../../assets/img/newsapi-logo.png';
import TheGuardianLogo from '../../assets/img/theguardian-logo.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { newsSources } from '../../constants';

export default function Home() {
  const {
    nyTimesNews,
    isNyTimesDataLoading,
    newsApiOrgNews,
    isNewsApiOrgDataLoading,
    theGuardianNews,
    isTheGuardianDataLoading,
  } = useNews();
  const selectedSources = useSelector((state: RootState) => state.search.sources);

  if (isNyTimesDataLoading && isNewsApiOrgDataLoading && isTheGuardianDataLoading) return <ArticlesSkeleton />;

  const sourcesData = [
    {
      name: 'News API',
      logo: NewsApiLogo,
      data: NormalizeArticlesData(newsApiOrgNews),
      loading: isNewsApiOrgDataLoading,
      key: newsSources.newsApiOrg,
    },
    {
      name: 'New York Times',
      logo: NYTimesLogo,
      data: NormalizeArticlesData(nyTimesNews),
      loading: isNyTimesDataLoading,
      key: newsSources.nyTimes,
    },
    {
      name: 'The Guardian',
      logo: TheGuardianLogo,
      data: NormalizeArticlesData(theGuardianNews),
      loading: isTheGuardianDataLoading,
      key: newsSources.theGuardian,
    },
  ];

  return (
    <React.Fragment>
      <Header />

      <main className="mx-auto max-w-7xl space-y-8 px-5 py-6">
        {sourcesData.map(({ name, logo, data, loading, key }) =>
          selectedSources.includes(key) ? (
            <NewsAggregatorSection key={key} title={name} logoUrl={logo} data={data} isLoading={loading} />
          ) : null,
        )}
      </main>
    </React.Fragment>
  );
}
