import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { Category } from '../../components/Category';
import { Movie } from '../../components/Movie';
import { StoreAll } from '../../core/store/store';
import { actions } from '../../core/store/movies';
import { MoviesNowPlaying } from '../../core/services/movieApiClient/lib/movies';

export const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setMovies());
  }, []);

  const movies = useSelector<StoreAll, MoviesNowPlaying[]>(({ moviesReducer }) => moviesReducer.movies);

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={4}>
          <Category />
        </Grid>

        <Grid item xs={8}>
          {movies.map((v, i) => (
            <Movie
              key={i}
              popularity={v.popularity}
              originalTitle={v.original_title}
              posterPath={v.poster_path ? v.poster_path : ''}
              overview={v.overview}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
