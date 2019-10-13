import React, { FunctionComponent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Grid } from '@material-ui/core';
import { Category } from '../../components/Category';
import { Movie } from '../../components/Movie';
import { getMovies } from '../../core/actions/movies';

export const Home: FunctionComponent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  const movies = useSelector((state: any) => state.movies);
  console.log(movies);

  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={4}>
          <Category />
        </Grid>

        <Grid item xs={8}>
          {movies.map((v: any, i: number) => (
            <Movie
              key={i}
              popularity={v.popularity}
              originalTitle={v.original_title}
              posterPath={v.poster_path}
              overview={v.overview}
              releaseDate={v.release_date}
              voteAverage={v.vote_average}
            />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};
