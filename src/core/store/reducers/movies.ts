import { GET_MOVIES } from '../types2';
import { MovieState } from '../types';

const initialState = {
  movies: [],
};

export const moviesReducer = (state: MovieState = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return { movies: action.payload };

    default:
      return state;
  }
};
