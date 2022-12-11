import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import FavoriteButton from '@/components/ui/favorite-button/favorite-button';

import { IMovie } from '@/shared/types/movie.types';

import { getMovieRoute } from '@/config/route.config';

import styles from './favorites.module.scss';

const FavoriteItem: FC<{ movie: IMovie | undefined }> = ({ movie }) => {
	return (
		<>
			{movie && (
				<div className={styles.itemWrapper}>
					<FavoriteButton filmId={String(movie.kinopoiskId)} />
					<Link href={getMovieRoute(movie.kinopoiskId)}>
						<a className={styles.item}>
							<Image
								alt={movie.nameRu}
								src={movie.posterUrl}
								layout="fill"
								priority
							/>

							<div className={styles.title}>{movie.nameRu}</div>
						</a>
					</Link>
				</div>
			)}
		</>
	);
};

export default FavoriteItem;
