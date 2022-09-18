import { axiosServer } from 'api/interceptors';
import Cookies from 'js-cookie';

import { REFRESH_TOKEN, USER } from '@/utils/consts';
import { removeFromLS } from '@/utils/storage';

import { getAuthUrl } from '@/config/api.config';

import { IAuthResponse } from '@/store/auth/auth.interface';

import { removeTokensFromCookie, saveToStorages } from './auth.helper';

export const AuthService = {
	async register(email: string, password: string) {
		const response = await axiosServer.post<IAuthResponse>(
			getAuthUrl('/register'),
			{ email, password },
		);

		if (response.data.accessToken) saveToStorages(response.data);

		return response;
	},

	async login(email: string, password: string) {
		const response = await axiosServer.post<IAuthResponse>(
			getAuthUrl('/login'),
			{ email, password },
		);

		if (response.data.accessToken) saveToStorages(response.data);

		return response;
	},

	logout() {
		removeTokensFromCookie();
		removeFromLS(USER);
	},

	async getNewTokens() {
		const refreshToken = Cookies.get(REFRESH_TOKEN);
		const response = await axiosServer.post<IAuthResponse>(
			getAuthUrl('/login/access-token'),
			{ refreshToken },
		);

		if (response.data.accessToken) saveToStorages(response.data);

		return response;
	},
};
