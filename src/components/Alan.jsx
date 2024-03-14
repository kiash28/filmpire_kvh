/* eslint-disable no-unused-vars */
import { useEffect, useContext } from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ColorModeContext } from '../utils/ToggleColorMode';
import { fetchToken } from '../utils';
import { selectGenreorCategory, searchMovie } from '../features/currentGenreorCategory';

const useAlan = () => {
  const { setMode } = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    alanBtn({
      key: '6eb120afe8cea198f15f9fb2fe09dbc52e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, mode, genres, GenreorCategory, query }) => {
        if (command === 'chooseGenre') {
          const foundGenre = genres.find((g) => g.name.toLowerCase() === GenreorCategory.toLowerCase());

          if (foundGenre) {
            history.push('/');
            dispatch(selectGenreorCategory(foundGenre.id));
          } else {
            const category = GenreorCategory.startsWith('top') ? 'top_rated' : GenreorCategory;
            history.push('/');
            dispatch(selectGenreorCategory(category));
          }
        } else if (command === 'changeMode') {
          if (mode === 'light') {
            setMode('light');
          } else {
            setMode('dark');
          }
        } else if (command === 'login') {
          fetchToken();
        } else if (command === 'logout') {
          localStorage.clear();
          history.push('/');
        } else if (command === 'search') {
          dispatch(searchMovie(query));
        }
      },
    });
  }, []);
};

export default useAlan;
