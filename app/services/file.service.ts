import { axiosInterseptors } from 'api/interceptors';

export const FileService = {
	async updateAvatar(file: FormData) {
		return axiosInterseptors.put<{ message: string; url: string }>(
			'files/upload',
			file,
			{
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			},
		);
	},
};
