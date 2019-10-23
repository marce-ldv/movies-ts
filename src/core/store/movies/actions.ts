import { Dispatch } from 'redux';
import { setMoviesAC, emptyMovieAC, MoviesAction } from './types';
import { movieDbService } from '../../services/movieApiClient';
import { MoviesNowPlayingResults } from '../../services/movieApiClient/lib/movies';

export const setMovies = () => (dispatch: Dispatch<MoviesAction>): void => {
  movieDbService
    .nowPlaying<MoviesNowPlayingResults>()
    .then(({ data: movies }) => {
      dispatch(setMoviesAC(movies));
    })
    .catch(e => {
      dispatch(emptyMovieAC());
    });
};
