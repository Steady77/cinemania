import { createSlice } from '@reduxjs/toolkit';

import { USER } from '@/utils/consts';
import { getFromLS } from '@/utils/storage';

import { checkAuth, login, logout, register } from './auth.actions';
import { IInitialState } from './auth.interface';

const initialState: IInitialState = {
	isLoading: false,
	user: getFromLS(USER),
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(register.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			})
			.addCase(login.rejected, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state) => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.user = payload.user;
			});
	},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
