import { Dispatch } from 'redux';
import { setMoviesAC, emptyMovieAC } from './types';
import { movieDbService } from '../../services/movieApiClient';
import { MoviesNowPlayingResults } from '../../services/movieApiClient/lib/movies';

export const setMovies = () => (dispatch: Dispatch): void => {
  movieDbService
    .nowPlaying<MoviesNowPlayingResults>()
    .then(({ data: movies }) => {
      dispatch(setMoviesAC(movies));
    })
    .catch(e => {
      dispatch(emptyMovieAC());
    });
};
