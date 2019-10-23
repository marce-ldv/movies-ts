import { MoviesAction } from './types';
import { MoviesNowPlaying } from '../../services/movieApiClient/lib/movies';

const initialState = {
  movies: [],
};

export interface MovieState {
  movies: MoviesNowPlaying[];
}

export const moviesReducer = (state: MovieState = initialState, action: MoviesAction): MovieState => {
  switch (action.type) {
    case 'SET_MOVIES_RESULT':
      return { movies: action.payload.results };

    default:
      return state;
  }
};
