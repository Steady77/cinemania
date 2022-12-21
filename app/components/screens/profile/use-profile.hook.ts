import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import { useActions } from '@/hooks/use-actions.hook';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { getProfile } = useActions();

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
		getProfile();
	};

	return { onSubmit, isLoading };
};
