import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading } = useQuery(['profile'], () => UserService.getProfile(), {
		onSuccess: ({ data }) => {
			setValue('email', data.email);
			setValue('avatar', data.avatar);
		},
		onError: (error) => {
			toastError(error, 'Получение профиля');
		},
	});

	const { mutateAsync } = useMutation(
		['update profile'],
		(userData: IProfileInput) => UserService.updateProfile(userData),
		{
			onSuccess: () => {
				toastr.success('Обновление профиля', 'Успешно');
			},
			onError: (error) => {
				toastError(error, 'Обновление профиля');
			},
		},
	);

	const onSubmit: SubmitHandler<IProfileInput> = async (userData) => {
		await mutateAsync(userData);
	};

	return { onSubmit, isLoading };
};
