import React from 'react';
import { Typography, Box } from '@mui/material';
import Movie from '../Movie/Movie';

import useStyles from './styles';

const RatedCards = ({ title, data }) => {
  const classes = useStyles();
  return (
    <Box>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <Box display="flex" flexwrap="wrap" className={classes.container}>
        {data?.results.map((movie, i) => (
          <Movie movie={movie} key={movie.id} i={i} />
        ))}
      </Box>
    </Box>
  );
};

export default RatedCards;
