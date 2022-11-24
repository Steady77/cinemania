import { ChangeEvent, useMemo, useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { toastr } from 'react-redux-toastr';

import { ITableItem } from '@/components/ui/admin-table/admin-table/admin-table.interface';

import { useDebounce } from '@/hooks/use-debounce.hook';

import { AdminService } from '@/services/admin.service';

import { convertSqlDate } from '@/utils/date';
import { toastError } from '@/utils/toast-error';

import { getAdminRoute } from '@/config/route.config';

export const useUsers = () => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearch = useDebounce(searchValue, 500);

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => AdminService.getUsers(debouncedSearch),
		{
			select: ({ data: { users } }) =>
				users.map(
					(user): ITableItem => ({
						id: user.id,
						editUrl: getAdminRoute(`user/edit/${user.id}`),
						items: [user.email, convertSqlDate(user.createdAt)],
					}),
				),

			onError: (error) => {
				toastError(error, 'Список пользователей');
			},
		},
	);

	const handleClear = () => {
		setSearchValue('');
	};

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	const { mutateAsync } = useMutation(
		['delete user'],
		(userId: string) => AdminService.deleteUser(userId),
		{
			onError: (error) => {
				toastError(error, 'Удаление пользователя');
			},

			onSuccess: () => {
				toastr.success('Удаление пользователя', 'Пользователь успешно удален');
				queryData.refetch();
			},
		},
	);

	return useMemo(
		() => ({
			handleSearch,
			searchValue,
			mutateAsync,
			handleClear,
			...queryData,
		}),
		[searchValue, mutateAsync, queryData],
	);
};
