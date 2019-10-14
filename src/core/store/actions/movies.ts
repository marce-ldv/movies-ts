import { GET_MOVIES } from '../types2';
import { getMovies as getMoviesService } from '../../services/movies';
import { MoviesNowPlayingResults } from '../../services/movieApiClient/lib/movies';

export const getMovies = () => (dispatch: any) => {
  getMoviesService<MoviesNowPlayingResults>()
    .then(r => {
      dispatch({
        type: GET_MOVIES,
        payload: r.data.results,
      });
    })
    .catch(e => {
      dispatch({
        type: GET_MOVIES,
        payload: [],
      });
    });
};
