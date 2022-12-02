export interface IUser {
	id: string;
	email: string;
	password: string;
	createdAt: string;
	avatar: string;
	isAdmin: boolean;
}

export interface IUserResp {
	users: IUser[];
}
