import { Genre, PagedResult, Dates } from '../core';

export interface MoviesNowPlaying {
  overview: string;
  id: number;
  title: string;
  poster_path: string | null;
  original_title: string;
  popularity: number;
}

export interface MoviesNowPlayingResults extends PagedResult<MoviesNowPlaying> {
  dates: Dates;
}

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
