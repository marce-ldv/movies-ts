import { Genre } from '../core';

export interface Movies {
  adult: boolean;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  title: string;
  genres: Genre[];
}
