import { FC } from 'react';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../heading/description';
import Heading from '../heading/heading';

import { ICatalog } from './catalog.interface';
import styles from './catalog.module.scss';

const Catalog: FC<ICatalog> = ({ title, description, movies }) => {
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
		</Meta>
	);
};
export default Catalog;
