import { useInfiniteQuery } from '@tanstack/react-query';
import { FC, Fragment } from 'react';

import { MovieService } from '@/services/movie.service';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../../gallery/gallery-item';
import Description from '../../heading/description';
import Heading from '../../heading/heading';
import styles from '../catalog.module.scss';

import { ITrendsCatalog } from './trends-catalog.interface';

const TrendsCatalog: FC<ITrendsCatalog> = ({ title, description }) => {
	const { data, fetchNextPage, hasNextPage, isRefetching } = useInfiniteQuery(
		['popular movies'],
		({ pageParam = 1 }) =>
			MovieService.getTop('TOP_100_POPULAR_FILMS', pageParam),
		{
			refetchOnMount: false,
			keepPreviousData: true,
			getNextPageParam: (lastPage, pages) => {
				const { pagesCount } = lastPage;

				if (pages.length < pagesCount) {
					return pages.length + 1;
				} else {
					return undefined;
				}
			},
		},
	);

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
				{!isRefetching &&
					data?.pages.map((group, idx) => (
						<Fragment key={idx}>
							{group.films.map((movie) => (
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
						</Fragment>
					))}
			</section>
			{hasNextPage && (
				<button
					onClick={() => fetchNextPage()}
					className={styles.button}
				>
					Еще
				</button>
			)}
		</Meta>
	);
};
export default TrendsCatalog;
