import React from 'react';
import { Card, CardActionArea, Grid, CardMedia, CardContent, Typography, Box } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

interface Props {
  popularity: number;
  originalTitle: string;
  posterPath: string;
  overview: string;
  releaseDate: string;
  voteAverage: number;
}

export const Movie: React.FunctionComponent<Props> = ({
  popularity,
  originalTitle,
  posterPath,
  overview,
  releaseDate,
  voteAverage,
}) => {
  return (
    <Card style={{ marginBottom: '1em' }}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={5}>
            <CardMedia
              image={`https://image.tmdb.org/t/p/w500${posterPath}`}
              style={{ height: '200px' }}
            />
          </Grid>
          <Grid item xs={7}>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {originalTitle}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {overview}
              </Typography>
              <Box>
                <Rating value={popularity} readOnly precision={0.5} />
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};
