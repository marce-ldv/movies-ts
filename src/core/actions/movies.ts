import { GET_MOVIES } from '../types';
import { getMovies as getMoviesService } from '../services/movies';

export const getMovies = () => async (dispatch: any) => {
  try {
    const movies = await getMoviesService();

    dispatch({
      type: GET_MOVIES,
      movies: movies.data.results,
    });
  } catch (e) {
    dispatch({
      type: GET_MOVIES,
      movies: [],
    });
  }
};
