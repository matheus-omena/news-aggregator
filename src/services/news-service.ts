import { useQuery } from '@tanstack/react-query';
import externalNewsApis from '../constants';
import axios from 'axios';
import { NyTimesApiResponse } from '../interfaces/nytimes-interface';

export function useNews() {
  const { data: nyTimesData, isPending: isNyTimesDataLoading } = useQuery({
    queryFn: async () => {
      const { apiBaseURL, apiKey } = externalNewsApis.NYTimes;
      const endpoint = `${apiBaseURL}?q=&api-key=${apiKey}`;

      const { data } = await axios.get<NyTimesApiResponse>(endpoint);
      return data?.response.docs;
    },
    queryKey: ['NYTimesNews'],
  });

  return {
    nyTimesNews: nyTimesData,
    isNyTimesDataLoading,
  };
}
