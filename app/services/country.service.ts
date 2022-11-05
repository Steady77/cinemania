import { axiosAPI } from 'api/interceptors';

import { IFiltersResp } from '@/shared/types/movie.type';

import { getCountryUrl } from '@/config/api.config';

export const CountryService = {
	async getCountries() {
		return axiosAPI.get<IFiltersResp>(getCountryUrl());
	},
};
