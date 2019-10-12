import React, { FunctionComponent } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Category } from '../../components/Category';
import { Movie } from '../../components/Movie';
import { useGetMovies } from './hooks';

export const Home: FunctionComponent = () => {
  const movies = useGetMovies();

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
