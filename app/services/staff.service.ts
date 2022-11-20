import { axiosAPI } from 'api/interceptors';

import { IPerson, IStaff } from '@/shared/types/staff.types';

import { getStaffUrl } from '@/config/api.config';

export const StaffService = {
	async getByFilmId(filmId: string) {
		return axiosAPI.get<IStaff[]>(getStaffUrl(''), {
			params: {
				filmId,
			},
		});
	},

	async getPerson(id: string) {
		return axiosAPI.get<IPerson>(getStaffUrl(`${id}`));
	},
};
