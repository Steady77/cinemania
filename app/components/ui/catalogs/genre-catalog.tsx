import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC, Fragment, useRef } from 'react';

import { useObserver } from '@/hooks/use-observer.hook';

import { MovieService } from '@/services/movie.service';

import Meta from '@/utils/meta/meta';

import { getMovieRoute } from '@/config/route.config';

import GalleryItem from '../gallery/gallery-item';
import Description from '../heading/description';
import Heading from '../heading/heading';
import Spinner from '../spinner/spinner';

import { ICatalog } from './catalog.interface';
import styles from './catalog.module.scss';

const GenreCatalog: FC<ICatalog> = ({ title, description }) => {
	const { query } = useRouter();
	const id = Number(query?.id);

	const ref = useRef<HTMLDivElement | null>(null);

	const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery(
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

				<div className={styles.movies}>
					{data?.pages.map((group, idx) => (
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
				{isFetching && <Spinner />}
				<div ref={ref}></div>
			</section>
		</Meta>
	);
};
export default GenreCatalog;
