/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const GenreorCategory = createSlice({
  name: 'GenreorCategory',
  initialState: {
    GenreIdorCategoryName: '',
    page: 1,
    searchQuery: '',
  },
  reducers: {
    selectGenreorCategory: (state, action) => {
      state.GenreIdorCategoryName = action.payload;
      state.searchQuery = '';
    },
    searchMovie: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { selectGenreorCategory, searchMovie } = GenreorCategory.actions;

export default GenreorCategory.reducer;
