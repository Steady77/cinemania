import { axiosAPI } from 'api/interceptors';

import { IFiltersResp } from '@/shared/types/movie.types';

import { getFiltersUrl } from '@/config/api.config';

export const FiltersService = {
	async getGenresCountries() {
		return axiosAPI.get<IFiltersResp>(getFiltersUrl());
	},
};
