import { MoviesNowPlayingResults } from '../../services/movieApiClient/lib/movies';

// export type MovieResult = MoviesNowPlayingResults | [];

/* Actions types*/
export type MoviesAction = { type: 'SET_MOVIES_RESULT'; payload: MoviesNowPlayingResults } | { type: 'EMPTY_MOVIES' };

/* Actions creators */
export function setMoviesAC(results: MoviesNowPlayingResults): MoviesAction {
  return {
    type: 'SET_MOVIES_RESULT',
    payload: results,
  };
}

export function emptyMovieAC(): MoviesAction {
  return {
    type: 'EMPTY_MOVIES',
  };
}
