import { FC } from 'react';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/url.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../header/description';
import Header from '../header/header';

import { ICatalog } from './catalog-movies.interface';
import styles from './catalog-movies.module.scss';

const CatalogMovies: FC<ICatalog> = ({ title, description, movies }) => {
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
				{movies.map((movie) => (
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
		</Meta>
	);
};
export default CatalogMovies;
