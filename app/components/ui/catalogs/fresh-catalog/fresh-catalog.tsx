import { useInfiniteQuery } from '@tanstack/react-query';
import { FC, Fragment } from 'react';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';
import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../../gallery/gallery-item';
import Description from '../../heading/description';
import Heading from '../../heading/heading';
import styles from '../catalog.module.scss';

import { IFreshCatalog } from './fresh-catalog.interface';

const FreshCatalog: FC<IFreshCatalog> = ({ title, description }) => {
	const yaer = getCurrentYear();
	const month = getCurrentMonth('en');

	const { data, fetchNextPage, hasNextPage, isRefetching } = useInfiniteQuery(
		['fresh movies'],
		({ pageParam = 1 }) => MovieService.getReleases(yaer, month, pageParam),
		{
			refetchOnMount: false,
			keepPreviousData: true,
			getNextPageParam: (lastPage) => {
				const { total, page } = lastPage;

				return total / 10 > page ? page + 1 : undefined;
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
			<section>
				<div className={styles.movies}>
					{!isRefetching &&
						data?.pages.map((group, idx) => (
							<Fragment key={idx}>
								{group.releases.map((movie) => (
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
				</div>
				{hasNextPage && (
					<button
						onClick={() => fetchNextPage()}
						className={styles.button}
					>
						Еще
					</button>
				)}
			</section>
		</Meta>
	);
};
export default FreshCatalog;
