import { GET_MOVIES } from '../types';
import { MoviesNowPlaying } from '../../services/movieApiClient/lib/movies';

const initialState = {
  movies: [],
};

export interface MovieState {
  movies: MoviesNowPlaying[];
}

export const moviesReducer = (state: MovieState = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return { movies: action.payload };

    default:
      return state;
  }
};
