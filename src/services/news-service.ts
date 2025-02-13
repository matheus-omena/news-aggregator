import { useQuery } from '@tanstack/react-query';
import externalNewsApis from '../constants';
import axios from 'axios';
import { NyTimesApiResponse } from '../interfaces/nytimes-interface';
import { NewsOrgApiResponse } from '../interfaces/neworgs-interface';
import { TheGuardianApiResponse } from '../interfaces/theguardian-interface';
import moment from 'moment';

export function useNews() {
  const { data: nyTimesData, isPending: isNyTimesDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.NYTimes;
      const endpoint = `${apiBaseURL}?q=&api-key=${apiKey}&pub_date=${moment().format('YYYY-MM-DD')}`;

      const { data } = await axios.get<NyTimesApiResponse>(endpoint);
      return data?.response.docs;
    },
    queryKey: ['NYTimesNews'],
  });

  const { data: newsOrgData, isPending: isNewsOrgDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.NewsOrg;
      const endpoint = `${apiBaseURL}&apiKey=${apiKey}`;

      const { data } = await axios.get<NewsOrgApiResponse>(endpoint);
      return data?.articles;
    },
    queryKey: ['NewsOrgNews'],
  });

  const { data: theGuardianData, isPending: isTheGuardianDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.TheGuardian;
      const endpoint = `${apiBaseURL}?api-key=${apiKey}`;

      const { data } = await axios.get<TheGuardianApiResponse>(endpoint);
      return data?.response?.results;
    },
    queryKey: ['TheGuardianNews'],
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
