import { FC } from 'react';

import Heading from '@/components/ui/heading/heading';

import Meta from '@/utils/meta/meta';

import UsersList from './users-list/users-list';

const Admin: FC = () => {
	return (
		<Meta title="Панель администратора">
			<Heading title="Пользователи" />
			<UsersList />
		</Meta>
	);
};

export default Admin;
