import axios, { AxiosResponse } from 'axios';

export type ENDPOINT = 'trending';

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3/${process.env.API_KEY}`,
  method: 'get',
});

export const movieDbService = <T>(endpoint: ENDPOINT): Promise<AxiosResponse<T>> => {
  return instance.get<T>(endpoint);
};
