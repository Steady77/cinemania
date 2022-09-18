import { IUser } from '@/shared/types/user.types';

export interface IAuthState {
	user_email: string;
	isAdmin: boolean;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IInitialState {
	user: IAuthState | null;
	isLoading: boolean;
}

export interface IEmailPassword {
	email: string;
	password: string;
}

export interface IAuthResponse extends ITokens {
	user: IUser & {
		isAdmin: boolean;
	};
}
