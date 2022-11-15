import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IFilmByFilters } from '@/shared/types/movie.type';

import { getMovieRoute } from '@/config/url.config';

import styles from './search-list.module.scss';

const SearchList: FC<{ movies: IFilmByFilters[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length ? (
        movies.map((movie) => (
          <Link
            key={movie.kinopoiskId}
            href={getMovieRoute(movie.kinopoiskId)}
          >
            <a>
              <Image
                width={50}
                height={50}
                src={movie.posterUrlPreview}
                alt={movie.nameRu}
                objectFit="cover"
                objectPosition="top"
              />
              <span>{movie.nameRu}</span>
            </a>
          </Link>
        ))
      ) : (
        <div className="text-white text-center my-4">Фильмы не найдены</div>
      )}
    </div>
  );
};
export default SearchList;
