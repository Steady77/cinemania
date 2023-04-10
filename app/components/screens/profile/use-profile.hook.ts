import { useMutation, useQuery } from '@tanstack/react-query';
import { SubmitHandler, UseFormSetValue } from 'react-hook-form';
import { toastr } from 'react-redux-toastr';

import { useActions } from '@/hooks/use-actions.hook';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import { IProfileInput } from './profile.interface';

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	const { getProfile, logout } = useActions();

	const { isLoading, data: profile } = useQuery(
		['profile'],
		() => UserService.getProfile(),
		{
			onSuccess: ({ data }) => {
				setValue('email', data.email);
				setValue('avatar', data.avatar);
			},
			onError: (error) => {
				toastError(error, 'Получение профиля');
			},
		},
	);

	const { mutateAsync: updateProfile } = useMutation(
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

	const { mutateAsync: deleteProfile } = useMutation(
		['delete profile'],
		(id: string) => UserService.deleteProfile(id),
		{
			onSuccess: () => {
				toastr.success('Удаление профиля', 'Успешно');
			},
			onError: (error) => {
				toastError(error, 'Удаление профиля');
			},
		},
	);

	const onSubmit: SubmitHandler<IProfileInput> = async (userData) => {
		await updateProfile(userData);
		getProfile();
	};

	const handleDelete = async () => {
		if (profile) {
			await deleteProfile(profile?.data.id);
			logout();
		}
	};

	return { onSubmit, isLoading, handleDelete };
};
