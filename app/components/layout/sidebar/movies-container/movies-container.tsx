import { FC } from 'react';

import FavoriteMovies from './favorite-movies/favorite-movies';
import PopularMovies from './popular-movies';

const MoviesContainer: FC = () => {
  return (
    <div>
      <PopularMovies />
      <FavoriteMovies />
    </div>
  );
};
export default MoviesContainer;
