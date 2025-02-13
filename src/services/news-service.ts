import { useQuery } from '@tanstack/react-query';
import externalNewsApis from '../constants';
import axios from 'axios';
import { NyTimesApiResponse } from '../interfaces/nytimes-interface';
import { NewsOrgApiResponse } from '../interfaces/neworgs-interface';
import { TheGuardianApiResponse } from '../interfaces/theguardian-interface';
import moment from 'moment';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export function useNews() {
  const searchQuery = useSelector((state: RootState) => state.search.query);

  const { data: nyTimesData, isPending: isNyTimesDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.NYTimes;
      let endpoint = `${apiBaseURL}?&q=`;
      if (searchQuery) endpoint += searchQuery;
      endpoint += `&api-key=${apiKey}&pub_date=${moment().format('YYYY-MM-DD')}`;

      const { data } = await axios.get<NyTimesApiResponse>(endpoint);
      return data?.response.docs;
    },
    queryKey: ['NYTimesNews', searchQuery],
  });

  const { data: newsOrgData, isPending: isNewsOrgDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.NewsOrg;
      let endpoint = `${apiBaseURL}&`;
      if (searchQuery) endpoint += `q=${searchQuery}&`;
      endpoint += `apiKey=${apiKey}`;

      const { data } = await axios.get<NewsOrgApiResponse>(endpoint);
      return data?.articles;
    },
    queryKey: ['NewsOrgNews', searchQuery],
  });

  const { data: theGuardianData, isPending: isTheGuardianDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.TheGuardian;
      let endpoint = `${apiBaseURL}?`;
      if (searchQuery) endpoint += `q=${searchQuery}&`;
      endpoint += `api-key=${apiKey}`;

      const { data } = await axios.get<TheGuardianApiResponse>(endpoint);
      return data?.response?.results;
    },
    queryKey: ['TheGuardianNews', searchQuery],
  });

  return {
    nyTimesNews: nyTimesData,
    isNyTimesDataLoading,
    newsOrgNews: newsOrgData,
    isNewsOrgDataLoading,
    theGuardianNews: theGuardianData,
    isTheGuardianDataLoading,
  };
}
