import React from 'react';
import { AppBar, Typography, Container, Grid } from '@material-ui/core';

export const Navbar: React.FunctionComponent = () => {
  return (
    <AppBar position="static">
      <Container fixed>
        <Grid container component="div">
          <Grid item xs={6} component="div">
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Movies TS
            </Typography>
          </Grid>
          <Grid item xs={6} component="div">
            <Typography variant="h6" style={{ textAlign: 'center' }}>
              Categories
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
};
