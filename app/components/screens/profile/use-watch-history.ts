import { useQueries, useQuery } from '@tanstack/react-query';

import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';

import { MovieService } from '@/services/movie.service';
import { UserService } from '@/services/user.service';

import { getMovieRoute } from '@/config/route.config';

export const useWatchHistory = () => {
	const { data } = useQuery(
		['user watch history'],
		() => UserService.getWatchedHistory(),
		{
			select: ({ data }) => data,
		},
	);

	const watchedFilmsIds = data?.watchHistory ?? [];

	const watchedMovies = useQueries({
		queries: watchedFilmsIds?.map((id) => {
			return {
				queryKey: ['watched films ids', id],
				queryFn: () => MovieService.getById(id),
			};
		}),
	});

	const movies: IGalleryItem[] = watchedMovies.map(({ data }) => {
		if (data) {
			return {
				name: data.nameRu,
				link: getMovieRoute(data.kinopoiskId),
				posterPath: data.posterUrlPreview,
				content: {
					title: data.nameRu,
					subTitle: data.ratingKinopoisk,
				},
			};
		} else {
			return {
				name: '',
				link: '',
				posterPath: '',
				content: {
					title: '',
					subTitle: '',
				},
			};
		}
	});

	return { data, movies };
};
