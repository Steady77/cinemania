import { axiosAPI } from 'api/interceptors';

import {
	IFilmsByFilters,
	IMovie,
	IPopularMovies,
	IPremieresMovies,
	IReleasesResp,
} from '@/shared/types/movie.type';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';

import { getMoviesUrl } from '@/config/api.config';

export const MovieService = {
	async getSearchedMovies(keyword?: string) {
		return axiosAPI.get<IFilmsByFilters>(getMoviesUrl(''), {
			params: keyword ? { keyword } : {},
		});
	},

	async getById(id: string) {
		return axiosAPI.get<IMovie>(getMoviesUrl(`/${id}`));
	},

	async getPopularMovies(type = 'TOP_100_POPULAR_FILMS', page = 1) {
		return axiosAPI.get<IPopularMovies>(getMoviesUrl('/top'), {
			params: { type, page },
		});
	},

	async getPremieresMovies() {
		return axiosAPI.get<IPremieresMovies>(getMoviesUrl('/premieres'), {
			params: {
				year: getCurrentYear(),
				month: getCurrentMonth('en'),
			},
		});
	},

	async getReleasesMovies() {
		return axiosAPI.get<IReleasesResp>('v2.1/films/releases', {
			params: {
				year: getCurrentYear(),
				month: getCurrentMonth('en'),
			},
		});
	},

	async getTvSeries() {
		return axiosAPI.get<IFilmsByFilters>(getMoviesUrl(''), {
			params: {
				type: 'TV_SERIES',
				yearFrom: getCurrentYear(),
			},
		});
	},
};
