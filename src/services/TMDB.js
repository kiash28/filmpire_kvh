/* eslint-disable camelcase */
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
    //* Get List
    getList: builder.query({
      query: ({ listName, accountId, sessionId, page }) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`,
    }),
    //* Get user specific list
    getRecommendations: builder.query({
      query: ({ movie_id, list }) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`,
    }),
    //* Get Actors Details
    getActorsDetails: builder.query({
      query: (id) => `person/${id}?api_key=${tmdbApiKey}`,
    }),

    //* Get movies by Actor Id
    getMoviesByActorId: builder.query({
      query: ({ id, page }) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const {
  useGetMoviesQuery, useGetGenresQuery, useGetMovieQuery, useGetRecommendationsQuery, useGetActorsDetailsQuery, useGetMoviesByActorIdQuery,
  useGetListQuery,
} = tmdbApi;
