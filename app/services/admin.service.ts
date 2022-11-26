import { axiosInterseptors } from 'api/interceptors';

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

	async deleteUser(id: string) {
		return axiosInterseptors.delete<string>(getAdminUrl(`/user${id}`));
	},
};
