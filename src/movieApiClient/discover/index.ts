// TODO: not complete

//TODO: not use this interface, use MovieResult from core
export interface DiscoverMovieResult {
  adult: boolean;
  overview: string;
  genreIds: number[];
  id: number;
}

export interface Discover {
  page: number;
  totalResults: number;
  totalPages: number;
  results: DiscoverMovieResult[];
}
