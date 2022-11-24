import { axiosInterseptors } from 'api/interceptors';

import { IUserResp } from '@/shared/types/user.types';

import { getUsersUrl } from '@/config/api.config';

export const AdminService = {
	async getUsers(keyword: string) {
		return axiosInterseptors.get<IUserResp>(getUsersUrl(''), {
			params: keyword
				? {
						keyword,
				  }
				: {},
		});
	},

	async deleteUser(id: string) {
		return axiosInterseptors.delete<string>(getUsersUrl(`/${id}`));
	},
};
