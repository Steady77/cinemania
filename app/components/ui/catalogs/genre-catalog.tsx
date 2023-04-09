import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC, Fragment } from 'react';

import { MovieService } from '@/services/movie.service';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../heading/description';
import Heading from '../heading/heading';

import { ICatalog } from './catalog.interface';
import styles from './catalog.module.scss';

const GenreCatalog: FC<ICatalog> = ({ title, description }) => {
	const { query } = useRouter();
	const id = Number(query?.id);

	const { data, fetchNextPage, hasNextPage, isRefetching } = useInfiniteQuery(
		['movies by genre'],
		({ pageParam = 1 }) =>
			MovieService.getByFilters({ genres: id, page: pageParam }),
		{
			refetchOnMount: false,
			keepPreviousData: true,
			getNextPageParam: (lastPage, pages) => {
				const { totalPages } = lastPage;

				if (pages.length < totalPages) {
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
			<section>
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

				<div className={styles.movies}>
					{!isRefetching &&
						data?.pages.map((group, idx) => (
							<Fragment key={idx}>
								{group.items.map((movie) => (
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
export default GenreCatalog;
