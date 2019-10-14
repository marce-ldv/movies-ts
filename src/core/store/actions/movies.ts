import { GET_MOVIES } from '../types';
import { movieDbService } from '../../services/movieApiClient';
import { MoviesNowPlayingResults } from '../../services/movieApiClient/lib/movies';

export const getMovies = () => (dispatch: any) => {
  movieDbService
    .nowPlaying<MoviesNowPlayingResults>()
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
