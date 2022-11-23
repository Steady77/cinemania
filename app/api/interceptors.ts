import axios from 'axios';
import Cookies from 'js-cookie';

import { removeTokensFromCookie } from '@/services/auth.helper';
import { AuthService } from '@/services/auth.service';

import { ACCESS_TOKEN } from '@/utils/consts';

import { API_KEY, API_URL, SERVER_URL } from '@/config/api.config';

import { errorCatch } from './api.helpers';

export const axiosAPI = axios.create({
	baseURL: API_URL,
	headers: {
		'X-API-KEY': API_KEY,
		'Content-Type': 'application/json',
	},
});

export const axiosServer = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const axiosInterseptors = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});

axiosInterseptors.interceptors.request.use((config) => {
	const accessToken = Cookies.get(ACCESS_TOKEN);

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

axiosInterseptors.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
			try {
				await AuthService.getNewTokens();
				return axiosInterseptors.request(originalRequest);
			} catch (error) {
				if (errorCatch(error) === 'jwt expired') {
					removeTokensFromCookie();
				}
			}
		}

		throw error;
	},
);
