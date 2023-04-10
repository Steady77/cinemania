import { axiosInterseptors } from 'api/interceptors';

import { IProfileInput } from '@/components/screens/profile/profile.interface';

import { IUserResp } from '@/shared/types/user.types';

import { getAdminUrl } from '@/config/api.config';

export const AdminService = {
	async getUsers(keyword: string) {
		return axiosInterseptors.get<IUserResp>(getAdminUrl('/users'), {
			params: keyword
				? {
						keyword,
				  }
				: {},
		});
	},

	async getOneUser(id: string) {
		return axiosInterseptors.get<string>(getAdminUrl(`/user/${id}`));
	},

	async updateUser(id: string, data: IProfileInput) {
		return axiosInterseptors.put<string>(getAdminUrl(`/user/${id}`), data);
	},

	async deleteUser(id: string) {
		return axiosInterseptors.delete<string>(getAdminUrl(`/user/${id}`));
	},
};
