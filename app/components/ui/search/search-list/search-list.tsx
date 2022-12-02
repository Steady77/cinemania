import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { useLockBodyScroll } from '@/hooks/use-lock-body-scroll.hook';

import { IFilmByFilters } from '@/shared/types/movie.types';

import { getMovieRoute } from '@/config/route.config';

import styles from './search-list.module.scss';

const SearchList: FC<{ movies: IFilmByFilters[] }> = ({ movies }) => {
	useLockBodyScroll();

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
								width={75}
								height={75}
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
