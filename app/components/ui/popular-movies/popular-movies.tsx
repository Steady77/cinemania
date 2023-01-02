import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import ContentLoader from '@/components/ui/content-loader';

import { MovieService } from '@/services/movie.service';

import MovieList from './movie-list';
import styles from './popular-movies.module.scss';

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery(
		['popular movies'],
		() => MovieService.getTop('TOP_100_POPULAR_FILMS'),
		{
			refetchOnMount: false,
			keepPreviousData: true,
			select: (data) => data.films,
		},
	);

	return isLoading || data?.length! < 1 ? (
		<div className="mt-5">
			<ContentLoader
				count={6}
				inline
				className="h-44"
				containerClassName={styles.loaderContainer}
			/>
		</div>
	) : (
		<MovieList
			link="/trends"
			movies={data || []}
		/>
	);
};
export default PopularMovies;
