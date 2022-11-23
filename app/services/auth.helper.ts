import Cookies from 'js-cookie';

import { ACCESS_TOKEN, REFRESH_TOKEN, USER } from '@/utils/consts';
import { saveToLS } from '@/utils/storage';

import { IAuthResponse, ITokens } from '@/store/auth/auth.interface';

export const saveTokensToCookie = (data: ITokens) => {
	Cookies.set(ACCESS_TOKEN, data.accessToken);
	Cookies.set(REFRESH_TOKEN, data.refreshToken);
};

export const removeTokensFromCookie = () => {
	Cookies.remove(ACCESS_TOKEN);
	Cookies.remove(REFRESH_TOKEN);
};

export const saveToStorages = (data: IAuthResponse) => {
	saveTokensToCookie(data);
	saveToLS(USER, data.user);
};
