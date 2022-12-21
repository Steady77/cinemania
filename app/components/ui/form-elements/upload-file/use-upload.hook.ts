import { useMutation } from '@tanstack/react-query';
import { ChangeEvent, useCallback, useMemo } from 'react';

import { FileService } from '@/services/file.service';

import { toastError } from '@/utils/toast-error';

type UploadType = (onChange: (...avent: any[]) => void) => {
	uploadImage: (e: ChangeEvent<HTMLInputElement>) => Promise<void>;
	isLoading: boolean;
};

export const useUpload: UploadType = (onChange) => {
	const { mutateAsync, isLoading } = useMutation(
		['upload file'],
		(data: FormData) => FileService.updateAvatar(data),
		{
			onSuccess: ({ data }) => {
				onChange(data.url);
			},
			onError(error) {
				toastError(error, 'Загрузка файла');
			},
		},
	);

	const uploadImage = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const files = e.target.files;
			if (!files?.length) return;

			const formData = new FormData();
			formData.append('image', files[0]);

			await mutateAsync(formData);
		},
		[mutateAsync],
	);

	return useMemo(() => ({ uploadImage, isLoading }), [uploadImage, isLoading]);
};
