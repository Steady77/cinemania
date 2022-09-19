import { FC } from 'react';

import { useAuth } from '@/hooks/use-auth.hook';

import MenuItem from '../menu-item';

import LogoutButton from './logout-button';

const AuthItems: FC = () => {
	const { user } = useAuth();

	return (
		<>
			{user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettings',
							link: '/profile',
							title: 'Профиль',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
						title: 'Войти',
					}}
				/>
			)}
		</>
	);
};
export default AuthItems;
