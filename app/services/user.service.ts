import { axiosInterseptors } from 'api/interceptors';

import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IUser } from '@/shared/types/user.types';

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
};
