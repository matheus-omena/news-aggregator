const externalNewsApis = {
  NYTimes: {
    apiBaseURL: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
    apiKey: import.meta.env.VITE_NYTIMES_API_KEY,
  },
  NewsOrg: {
    apiBaseURL: 'https://newsapi.org/v2/top-headlines?pageSize=10&language=en',
    apiKey: import.meta.env.VITE_NEWSORG_API_KEY,
  },
  TheGuardian: {
    apiBaseURL: 'https://content.guardianapis.com/search',
    apiKey: import.meta.env.VITE_THEGUARDIAN_API_KEY,
  },
};

export default externalNewsApis;
