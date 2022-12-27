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
		const { data } = await axiosAPI.get<IMovie>(getMoviesUrl(`/${id}`));

		return data;
	},

	async getSimilars(id: string) {
		const { data } = await axiosAPI.get<ISimilarsResp>(
			getMoviesUrl(`/${id}/similars`),
		);

		return data;
	},

	async getTop(type: TopType, page = 1) {
		const { data } = await axiosAPI.get<ITopResponse>(getMoviesUrl('/top'), {
			params: { type, page },
		});

		return data;
	},

	async getPremieres(year: number, month: string | undefined) {
		const { data } = await axiosAPI.get<IPremieresMovies>(
			getMoviesUrl('/premieres'),
			{
				params: {
					year,
					month,
				},
			},
		);

		return data;
	},

	async getReleases(year: number, month: string | undefined, page = 1) {
		const { data } = await axiosAPI.get<IReleasesResponse>(
			'v2.1/films/releases',
			{
				params: {
					year,
					month,
					page,
				},
			},
		);

		return data;
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
		const { data } = await axiosAPI.get<IFilmsByFiltersResp>(getMoviesUrl(''), {
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

		return data;
	},
};
