import { axiosAPI } from 'api/interceptors';

import {
	IFilmsByFiltersResp,
	IMovie,
	IPremieresMovies,
	IReleasesResponse,
	ISimilarsResp,
	ITopResponse,
} from '@/shared/types/movie.types';

import { getMoviesUrl } from '@/config/api.config';

interface IGetByFilters {
	countries?: number;
	genres?: number;
	order?: 'RATING' | 'NUM_VOTE' | 'YEAR';
	type?: 'FILM' | 'TV_SHOW' | 'TV_SERIES' | 'MINI_SERIES' | 'ALL';
	ratingFrom?: number;
	ratingTo?: number;
	yearFrom?: number;
	yearTo?: number;
	imdbId?: string;
	keyword?: string;
	page?: number;
}

type TopType =
	| 'TOP_100_POPULAR_FILMS'
	| 'TOP_250_BEST_FILMS'
	| 'TOP_AWAIT_FILMS';

export const MovieService = {
	async getById(id: string) {
		return axiosAPI.get<IMovie>(getMoviesUrl(`/${id}`));
	},

	async getSimilars(id: string) {
		return axiosAPI.get<ISimilarsResp>(getMoviesUrl(`/${id}/similars`));
	},

	async getTop(type: TopType, page = 1) {
		return axiosAPI.get<ITopResponse>(getMoviesUrl('/top'), {
			params: { type, page },
		});
	},

	async getPremieres(year: number, month: string | undefined) {
		return axiosAPI.get<IPremieresMovies>(getMoviesUrl('/premieres'), {
			params: {
				year,
				month,
			},
		});
	},

	async getReleases(year: number, month: string | undefined, page = 1) {
		return axiosAPI.get<IReleasesResponse>('v2.1/films/releases', {
			params: {
				year,
				month,
				page,
			},
		});
	},

	async getByFilters({
		countries,
		genres,
		order,
		type,
		ratingFrom,
		ratingTo,
		yearFrom,
		yearTo,
		imdbId,
		keyword,
		page,
	}: IGetByFilters) {
		return axiosAPI.get<IFilmsByFiltersResp>(getMoviesUrl(''), {
			params: {
				countries,
				genres,
				order,
				type,
				ratingFrom,
				ratingTo,
				yearFrom,
				yearTo,
				imdbId,
				keyword,
				page,
			},
		});
	},
};
