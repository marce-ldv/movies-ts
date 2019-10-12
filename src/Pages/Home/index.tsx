import React, { FunctionComponent } from 'react';
import { Container, Grid } from '@material-ui/core';
import { Category } from '../../components/Category';
import { Movie } from '../../components/Movie';

export const Home: FunctionComponent = () => {
  return (
    <Container fixed>
      <Grid container>
        <Grid item xs={4}>
          <Category />
        </Grid>

        <Grid item xs={8}>
          <Movie />
        </Grid>
      </Grid>
    </Container>
  );
};
