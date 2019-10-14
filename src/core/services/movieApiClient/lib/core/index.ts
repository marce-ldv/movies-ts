export type Dates = {
  maximum: string;
  minimum: string;
};

export interface Genre {
  id: number;
  name: string;
}

export interface MovieResult {
  adult: boolean;
  overview: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  title: string;
}

export interface PagedResult<T> {
  page: number;
  total_pages: number;
  total_results: number;
  results: T[];
}
