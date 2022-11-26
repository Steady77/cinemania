import { axiosInterseptors } from 'api/interceptors';

import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IUser } from '@/shared/types/user.types';

import { getUserUrl } from '@/config/api.config';

export const UserService = {
	async getProfile() {
		return axiosInterseptors.get<IUser>(getUserUrl('/profile'));
	},

	async updateProfile(data: IProfileInput) {
		return axiosInterseptors.put<string>(getUserUrl('/profile'), data);
	},
};
