import { useQueries, useQuery } from 'react-query';

import { MovieService } from '@/services/movie.service';
import { UserService } from '@/services/user.service';

export const useFavorites = () => {
	const {
		isLoading,
		data: favoritesIds,
		refetch,
	} = useQuery(['user favorites'], () => UserService.getFavorites(), {
		select: ({ data }) => data,
	});

	const favoritesMovies = useQueries(
		favoritesIds?.map((id) => {
			return {
				queryKey: ['favorites id', id],
				queryFn: () => MovieService.getById(id),
			};
		}) || [],
	);

	return { favoritesIds, isLoading, favoritesMovies, refetch };
};
