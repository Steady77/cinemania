import { FC, useEffect, useRef, useState } from 'react';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';
import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/url.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../heading/description';
import Heading from '../heading/heading';

import { IFreshCatalog } from './fresh-catalog.interface';
import styles from './fresh-catalog.module.scss';

const FreshCatalog: FC<IFreshCatalog> = ({
	title,
	description,
	movies,
	total,
}) => {
	const [moviesData, setMoviesData] = useState(movies);
	const [currentPage, setCurrentPage] = useState(1);
	const isMounted = useRef(false);

	const totalPages = Math.ceil(total / 10);

	useEffect(() => {
		if (isMounted.current) {
			const getData = async () => {
				try {
					const yaer = getCurrentYear();
					const month = getCurrentMonth('en');

					const {
						data: { releases },
					} = await MovieService.getReleases(yaer, month, currentPage);

					setMoviesData([...moviesData, ...releases]);
				} catch (error: any) {
					console.log(error);
				}
			};

			getData();
		}

		isMounted.current = true;
	}, [currentPage]);

	const loadMore = () => {
		setCurrentPage((prev) => prev + 1);
	};

	return (
		<Meta
			title={title}
			description={description}
		>
			<Heading
				title={title}
				className={styles.heading}
			/>
			{description && (
				<Description
					text={description}
					className={styles.description}
				/>
			)}
			<section className={styles.movies}>
				{moviesData.length > 0 &&
					moviesData.map((movie) => (
						<GalleryItem
							key={movie.filmId}
							item={{
								name: movie.nameRu,
								posterPath: movie.posterUrlPreview,
								link: getMovieRoute(movie.filmId),
								content: { title: movie.nameRu },
							}}
							variant="horizontal"
						/>
					))}
			</section>
			{totalPages && currentPage < totalPages && (
				<button
					onClick={loadMore}
					className={styles.button}
				>
					Еще
				</button>
			)}
		</Meta>
	);
};
export default FreshCatalog;
