import { FC } from 'react';
import { useQuery } from 'react-query';

import ContentLoader from '@/components/ui/content-loader';

import { MovieService } from '@/services/movie.service';

import MovieList from './movie-list';

const PopularMovies: FC = () => {
	const { isLoading, data } = useQuery(
		'popular movies sidebar',
		() => MovieService.getTop('TOP_100_POPULAR_FILMS'),
		{
			select: ({ data }) => data.films,
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
