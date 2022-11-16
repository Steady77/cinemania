import { axiosAPI } from 'api/interceptors';

import { IStaff } from '@/shared/types/staff.types';

import { getStaffUrl } from '@/config/api.config';

export const StaffService = {
	async getByFilmId(filmId: string) {
		return axiosAPI.get<IStaff[]>(getStaffUrl(), {
			params: {
				filmId,
			},
		});
	},
};
