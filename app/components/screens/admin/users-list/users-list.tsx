import { FC } from 'react';

import AdminHeader from '@/components/ui/admin-table/admin-header.tsx/admin-header';
import AdminTable from '@/components/ui/admin-table/admin-table/admin-table';

import { useUsers } from './use-users.hook';

const UsersList: FC = () => {
	const { handleSearch, isLoading, searchValue, data, mutateAsync } =
		useUsers();

	return (
		<>
			<AdminHeader
				handleSearch={handleSearch}
				searchValue={searchValue}
			/>
			<AdminTable
				isLoading={isLoading}
				removeHandler={mutateAsync}
				headerItems={['Почта', 'Дата регистрации']}
				tableItems={data || []}
			/>
		</>
	);
};

export default UsersList;
