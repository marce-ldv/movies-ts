import { MoviesNowPlaying } from '../../services/movieApiClient/lib/movies';

export interface StoreAll {
  moviesReducer: MovieState;
}

export interface MovieState {
  movies: MoviesNowPlaying[];
}
