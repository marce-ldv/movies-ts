import { GET_MOVIES } from '../types';

const initialState = {
  movies: [],
};

export const moviesReducer = (state = initialState, action: { type: any; movies: any }) => {
  switch (action.type) {
    case GET_MOVIES:
      return action.movies;

    default:
      return state;
  }
};
