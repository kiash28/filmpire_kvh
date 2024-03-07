import React, {useState, useEffect} from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';


import { useGetMoviesQuery } from '../../services/TMDB';
import { selectGenreorCategory } from '../../features/currentGenreorCategory';
import MovieList from '../MovieList/MovieList';

const Movies = () => {
  const [page, setPage] = useState(1);
  const { GenreIdorCategoryName, searchQuery } = useSelector((state) => state.currentGenreorCategory);
  const { data, error, isFetching } = useGetMoviesQuery({ GenreIdorCategoryName, page, searchQuery });
  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  }

  if (!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please search for something else.
        </Typography>
      </Box>
    );
  }

  if (error) return 'An error has occured'

  console.log('data:', data);
  console.log('data.resulT:', data.results);

  return (
    <div>
      <MovieList movies={data}/>
    </div>
  )
}

export default Movies;