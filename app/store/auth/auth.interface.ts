import { IUser } from '@/shared/types/user.types';

export interface IAuthState {
	email: string;
	isAdmin: boolean;
	avatar: string;
}

export interface ITokens {
	accessToken: string;
	refreshToken: string;
}

export interface IAuthInitialState {
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
