import React from 'react';
import { AppBar, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

export const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Grid container justify="center" component="div">
        <Grid item xs={3} component="div">
          <Typography variant="h6">Movies TS</Typography>
        </Grid>
        <Grid item xs={3} component="div">
          <Typography variant="h6">Categories</Typography>
        </Grid>
      </Grid>
    </AppBar>
  );
};
