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

export interface WatchedHistory {
	watchHistory: string[];
	totalWatched: number;
}
