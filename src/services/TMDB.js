import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;

export const tmdbApi = createApi({
  reducerPath: 'tmdbApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({
    //* Get Genres
    getGenres: builder.query({
      query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
    }),
    //* Get Movies by [TYPE]
    getMovies: builder.query({
      query: ({ GenreIdorCategoryName, page, searchQuery }) => {
        //* Get movies by search
        if (searchQuery) {
          return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get movies by category
        if (GenreIdorCategoryName && typeof GenreIdorCategoryName === 'string') {
          return `movie/${GenreIdorCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }
        //* Get movies by Genre
        if (GenreIdorCategoryName && typeof GenreIdorCategoryName === 'number') {
          return `discover/movie?with_genres=${GenreIdorCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
        }

        // Get popular movies
        return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
      },
    }),
    //* Get Movie
    getMovie: builder.query({
      query: (id) => `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery,
} = tmdbApi;
