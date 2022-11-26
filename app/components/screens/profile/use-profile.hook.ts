import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { isLoading, data } = useQuery(
		['profile'],
		() => UserService.getProfile(),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email);
			},
			onError: (error) => {
				toastError(error, 'Получение профиля');
			},
		},
	);

	const { mutateAsync } = useMutation(
		['update profile'],
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess: () => {
				toastr.success('Обновление профиля', 'Успешно');
			},
			onError: (error) => {
				toastError(error, 'Обновление профиля');
			},
		},
	);

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data);
	};

	return { onSubmit, isLoading, data };
};
