import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  method: 'get',
});

const movieDbServiceBase = <T>(endpoint: string): Promise<AxiosResponse<T>> => {
  return instance.get<T>(endpoint);
};

/**
 * Trending
 */
export type mediaTypes = 'all' | 'movie' | 'tv' | 'person';
export type timeWindows = 'day' | 'week';

export type trendingParams = {
  mediaTypes: mediaTypes;
  timeWindows: timeWindows;
};

export const movieDbService = {
  trending<T>({ mediaTypes, timeWindows }: trendingParams) {
    return movieDbServiceBase<T>(`/trending/${mediaTypes}/${timeWindows}?api_key=${process.env.REACT_APP_API_KEY}`);
  },
  nowPlaying<T>() {
    return movieDbServiceBase<T>(`/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}`);
  },
};
