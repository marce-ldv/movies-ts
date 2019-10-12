import React from 'react';
import { Card, CardActionArea, Grid, CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export const Movie: React.FunctionComponent = () => {
  return (
    <Card>
      <CardActionArea>
        <Grid container>
          <Grid item xs={5}>
            <CardMedia
              image="https://indiehoy.com/wp-content/uploads/2018/05/avengers-inifity-war.jpg"
              style={{ height: '200px' }}
            />
          </Grid>
          <Grid item xs={7}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Avengers Endgame
              </Typography>
              <Typography variant="body2" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam architecto asperiores facere
                fugit, mollitia.
              </Typography>
              <Box>
                <Rating value={5} readOnly precision={0.5} />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
