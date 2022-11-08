import { createSlice } from '@reduxjs/toolkit';

import { ICountry, IGenre } from '@/shared/types/movie.type';

import { getGenresCountries } from './filters.actions';

interface IFiltersInitialState {
	isLoading: boolean;
	genres: IGenre[] | [];
	countries: ICountry[] | [];
}

const initialState: IFiltersInitialState = {
	isLoading: false,
	countries: [],
	genres: [],
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getGenresCountries.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getGenresCountries.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.countries = payload.countries;
				state.genres = payload.genres;
			})
			.addCase(getGenresCountries.rejected, (state) => {
				state.isLoading = false;
				state.countries = [];
				state.genres = [];
			});
	},
});

export default filtersSlice.reducer;
