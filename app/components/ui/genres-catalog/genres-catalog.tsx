import { FC, useEffect, useRef, useState } from 'react';

import { MovieService } from '@/services/movie.service';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/url.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../header/description';
import Header from '../header/header';

import { IGenresCatalog } from './genres-catalog.interface';
import styles from './genres-catalog.module.scss';

const GenresCatalog: FC<IGenresCatalog> = ({
	title,
	description,
	movies,
	pagesCount,
}) => {
	// const [moviesData, setMoviesData] = useState(movies);
	const [currentPage, setCurrentPage] = useState(1);
	const isMounted = useRef(false);

	// useEffect(() => {
	// 	if (isMounted.current) {
	// 		const getData = async () => {
	// 			try {
	// 				const {
	// 					data: { items },
	// 				} = await MovieService.getByFilters({
	// 					genres: movies[0].genres[0].id,
	// 					page: currentPage,
	// 				});

	// 				setMoviesData([...moviesData, ...items]);
	// 			} catch (error: any) {
	// 				console.log(error);
	// 			}
	// 		};

	// 		getData();
	// 	}

	// 	isMounted.current = true;
	// }, [currentPage]);

	const loadMore = () => {
		setCurrentPage((prev) => prev + 1);
	};

	return (
		<Meta
			title={title}
			description={description}
		>
			<Header
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
				{movies.length > 0 &&
					movies.map((movie) => (
						<GalleryItem
							key={movie.kinopoiskId}
							item={{
								name: movie.nameRu,
								posterPath: movie.posterUrlPreview,
								link: getMovieRoute(movie.kinopoiskId),
								content: { title: movie.nameRu },
							}}
							variant="horizontal"
						/>
					))}
			</section>
			{currentPage < pagesCount && (
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
export default GenresCatalog;
