import { createAsyncThunk } from '@reduxjs/toolkit';

import { IFiltersResp } from '@/shared/types/movie.type';

import { FiltersService } from '@/services/filters.service';

export const getGenresCountries = createAsyncThunk<IFiltersResp>(
	'filters/getGenresCountries',
	async (_, thunkApi) => {
		try {
			const response = await FiltersService.getGenresCountries();
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	},
);
