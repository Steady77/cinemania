import Link from 'next/link';
import { FC } from 'react';

import MovieItem from './movie-item';
import { IMovieList } from './movie-list.interface';
import styles from './movie-list.module.scss';

const MovieList: FC<IMovieList> = ({ link, movies, title }) => {
  return (
    <div className={styles.list}>
      <div className={styles.header}>{title}</div>
      {movies.map((movie) => (
        <MovieItem
          key={movie.filmId}
          movie={movie}
        />
      ))}
      <Link href={link}>
        <a className={styles.button}>Посмотреть еще</a>
      </Link>
    </div>
  );
};
export default MovieList;
