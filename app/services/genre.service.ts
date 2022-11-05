import { axiosAPI } from 'api/interceptors';

import { IFiltersResp } from '@/shared/types/movie.type';

import { getGenresUrl } from '@/config/api.config';

export const GenreService = {
	async getGenres() {
		return axiosAPI.get<IFiltersResp>(getGenresUrl());
	},
};
