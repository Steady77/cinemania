import { axiosInterseptors } from 'api/interceptors';

import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IUser, WatchedHistory } from '@/shared/types/user.types';

import { USER } from '@/utils/consts';
import { saveToLS } from '@/utils/storage';

import { getUserUrl } from '@/config/api.config';

export const UserService = {
	async getProfile() {
		const response = await axiosInterseptors.get<IUser>(getUserUrl('/profile'));

		if (response.data) {
			saveToLS(USER, response.data);
		}

		return response;
	},

	async updateProfile(data: IProfileInput) {
		return axiosInterseptors.put<string>(getUserUrl('/profile'), data);
	},

	async deleteProfile(id: string) {
		return axiosInterseptors.delete<string>(getUserUrl(`/profile/${id}`));
	},

	async getFavorites() {
		return axiosInterseptors.get<string[]>(getUserUrl('/profile/favorites'));
	},

	async toggleFavorites(filmId: string) {
		return axiosInterseptors.post<string>(getUserUrl('/profile/favorites'), {
			filmId,
		});
	},

	async getWatchedHistory() {
		return axiosInterseptors.get<WatchedHistory>(
			getUserUrl('/profile/history'),
		);
	},

	async setWatchedHistory(filmId: string) {
		return axiosInterseptors.post<{ message: string }>(
			getUserUrl('/profile/history'),
			{
				filmId,
			},
		);
	},
};
