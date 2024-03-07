import { configureStore } from '@reduxjs/toolkit';
import { tmdbApi } from '../services/TMDB';
import GenreorCategoryReducer from '../features/currentGenreorCategory';
import userReducer from '../features/auth';

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath]: tmdbApi.reducer,
    currentGenreorCategory: GenreorCategoryReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
