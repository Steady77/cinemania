import { useInfiniteQuery } from '@tanstack/react-query';
import { FC, Fragment, useRef } from 'react';

import { useObserver } from '@/hooks/use-observer.hook';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';
import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../../gallery/gallery-item';
import Description from '../../heading/description';
import Heading from '../../heading/heading';
import Spinner from '../../spinner/spinner';
import styles from '../catalog.module.scss';

import { IFreshCatalog } from './fresh-catalog.interface';

const FreshCatalog: FC<IFreshCatalog> = ({ title, description }) => {
	const ref = useRef<HTMLDivElement | null>(null);

	const yaer = getCurrentYear();
	const month = getCurrentMonth('en');

	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
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

	useObserver(ref, hasNextPage, isFetching, fetchNextPage);

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
					{data?.pages.map((group, idx) => (
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
				{isFetching && <Spinner />}
				<div ref={ref}></div>
			</section>
		</Meta>
	);
};
export default FreshCatalog;
