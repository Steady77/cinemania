import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorCatch } from 'api/api.helpers';
import { toastr } from 'react-redux-toastr';

import { AuthService } from '@/services/auth.service';

import { toastError } from '@/utils/toast-error';

import { IAuthResponse, IEmailPassword } from './auth.interface';

export const register = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			toastr.success('Регистрация', 'Успешно завершена');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	},
);

export const login = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			toastr.success('Вход', 'Успешно завершен');
			return response.data;
		} catch (error) {
			toastError(error);
			return thunkApi.rejectWithValue(error);
		}
	},
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout;
});

export const checkAuth = createAsyncThunk<IAuthResponse, IEmailPassword>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens();
			return response.data;
		} catch (error) {
			if (errorCatch(error) === 'jwt expired') {
				toastr.error('Выход', 'Вы вышли из системы');
				thunkApi.dispatch(logout());
			}

			return thunkApi.rejectWithValue(error);
		}
	},
);
