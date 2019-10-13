import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/${process.env.API_KEY}`,
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
    return movieDbServiceBase<T>(`/trending/${mediaTypes}/${timeWindows}`);
  },
};
