import React from 'react';
import { AppBar, Typography, Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Container fixed>
        <Grid container justify="center" component="div">
          <Grid item xs={6} component="div">
            <Typography variant="h6">Movies TS</Typography>
          </Grid>
          <Grid item xs={6} component="div">
            <Typography variant="h6">Categories</Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
