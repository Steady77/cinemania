import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import MaterialIcon from '@/components/ui/material-icon';

import { IPopularMovie } from '@/shared/types/movie.type';

import { getStringOfGenres } from '@/utils/movie/get-string-of-genres';

import { getMovieRoute } from '@/config/url.config';

import styles from './movie-list.module.scss';

const MovieItem: FC<{ movie: IPopularMovie }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieRoute(movie.filmId)}>
        <a>
          <Image
            src={movie.posterUrlPreview}
            alt={movie.nameRu}
            width={65}
            height={97}
            priority
          />
        </a>
      </Link>
      <div className={styles.info}>
        <Link href={getMovieRoute(movie.filmId)}>
          <a>
            <h5 className={styles.title}>{movie.nameRu}</h5>
          </a>
        </Link>
        <div className={styles.genres}>
          {movie.genres.map((genre, idx) => (
            <span key={idx}>
              {getStringOfGenres(idx, movie.genres.length, genre.genre)}
            </span>
          ))}
        </div>
        <div className={styles.rating}>
          <MaterialIcon name="MdStarRate" />
          <span>{movie.rating}</span>
        </div>
      </div>
    </div>
  );
};
export default MovieItem;
