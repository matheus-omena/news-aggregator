import { useQuery } from '@tanstack/react-query';
import { externalNewsApis, newsSources } from '../constants';
import axios from 'axios';
import { NyTimesApiResponse } from '../interfaces/nytimes-interface';
import { NewsOrgApiResponse } from '../interfaces/neworgs-interface';
import { TheGuardianApiResponse } from '../interfaces/theguardian-interface';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function useNews() {
  const { query, pubDate, category, sources } = useSelector((state: RootState) => state.search);

  const shouldFetchNYTimes = sources.includes(newsSources.nyTimes);
  const shouldFetchNewsApiOrg = sources.includes(newsSources.newsApiOrg);
  const shouldFetchTheGuardian = sources.includes(newsSources.theGuardian);

  const { data: nyTimesData, isPending: isNyTimesDataLoading } = useQuery({
    queryFn: async () => {
      if (!shouldFetchNYTimes) return [];
      const { apiBaseURL, apiKey } = externalNewsApis.NYTimes;
      let endpoint = `${apiBaseURL}?&q=`;
      if (query) endpoint += query;
      if (category) endpoint += `&fq=section_name:${category}`;
      endpoint += `&api-key=${apiKey}&pub_date=${pubDate ? pubDate : moment().format('YYYY-MM-DD')}`;

      const { data } = await axios.get<NyTimesApiResponse>(endpoint);
      return data?.response.docs;
    },
    queryKey: ['NYTimesNews', query, pubDate, category, sources],
  });

  const { data: newsApiOrgData, isPending: isNewsApiOrgDataLoading } = useQuery({
    queryFn: async () => {
      if (!shouldFetchNewsApiOrg) return [];
      const { apiBaseURL, apiKey } = externalNewsApis.NewsOrg;
      let endpoint = `${apiBaseURL}&`;
      if (query) endpoint += `q=${query}&`;
      if (category) endpoint += `category=${category}&`;
      if (pubDate) endpoint += `from=${pubDate}&to=${pubDate}&`;
      endpoint += `apiKey=${apiKey}`;

      const { data } = await axios.get<NewsOrgApiResponse>(endpoint);
      return data?.articles;
    },
    queryKey: ['NewsApiOrgNews', query, pubDate, category, sources],
  });

  const { data: theGuardianData, isPending: isTheGuardianDataLoading } = useQuery({
    queryFn: async () => {
      if (!shouldFetchTheGuardian) return [];
      const { apiBaseURL, apiKey } = externalNewsApis.TheGuardian;
      let endpoint = `${apiBaseURL}?`;
      if (query) endpoint += `q=${query}&`;
      if (category) endpoint += `tag=${category}&`;
      if (pubDate) endpoint += `from-date=${pubDate}&to-date=${pubDate}&`;
      endpoint += `api-key=${apiKey}`;

      const { data } = await axios.get<TheGuardianApiResponse>(endpoint);
      return data?.response?.results;
    },
    queryKey: ['TheGuardianNews', query, pubDate, category, sources],
  });

  return {
    nyTimesNews: nyTimesData,
    isNyTimesDataLoading,
    newsApiOrgNews: newsApiOrgData,
    isNewsApiOrgDataLoading,
    theGuardianNews: theGuardianData,
    isTheGuardianDataLoading,
  };
}
