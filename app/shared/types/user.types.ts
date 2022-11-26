export interface IUser {
	id: string;
	email: string;
	password: string;
	createdAt: string;
	avatar: string;
}

export interface IUserResp {
	users: IUser[];
}
