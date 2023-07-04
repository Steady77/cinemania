import { useInfiniteQuery } from '@tanstack/react-query';
import { FC, Fragment, useRef } from 'react';

import { useObserver } from '@/hooks/use-observer.hook';

import { MovieService } from '@/services/movie.service';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../../gallery/gallery-item';
import Description from '../../heading/description';
import Heading from '../../heading/heading';
import Spinner from '../../spinner/spinner';
import styles from '../catalog.module.scss';

import { ITrendsCatalog } from './trends-catalog.interface';

const TrendsCatalog: FC<ITrendsCatalog> = ({ title, description }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
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

	useObserver(ref, hasNextPage, isFetching, fetchNextPage);

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
				<div>
					<div className={styles.movies}>
						{data?.pages.map((group, idx) => (
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
					</div>
				</div>
				{isFetching && <Spinner />}
				<div ref={ref}></div>
			</section>
		</Meta>
	);
};
export default TrendsCatalog;
