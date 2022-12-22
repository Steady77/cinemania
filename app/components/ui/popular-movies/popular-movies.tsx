import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import ContentLoader from '@/components/ui/content-loader';

import { MovieService } from '@/services/movie.service';

import MovieList from './movie-list';

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
		<div className="mt-11">
			<ContentLoader
				count={3}
				className="h-28 mb-4"
			/>
		</div>
	) : (
		<MovieList
			link="/trends"
			movies={data || []}
			title="Популярные фильмы"
		/>
	);
};
export default PopularMovies;
