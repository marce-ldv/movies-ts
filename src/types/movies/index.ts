import { Genre } from '../core';

export interface Movies {
  adult: boolean;
  id: number;
  imdbId: string | null;
  originalLanguage: string;
  originalTitle: string;
  overview: string | null;
  popularity: number;
  title: string;
  genres: Genre[];
}
