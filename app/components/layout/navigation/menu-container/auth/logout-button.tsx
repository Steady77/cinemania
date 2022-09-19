import { FC, MouseEvent } from 'react';

import MaterialIcon from '@/components/ui/material-icon';

import { useActions } from '@/hooks/use-actions.hook';

const LogoutButton: FC = () => {
	const { logout } = useActions();

	const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		logout();
	};

	return (
		<li>
			<a onClick={handleLogout}>
				<MaterialIcon name="MdLogout" />
				<span>Выйти</span>
			</a>
		</li>
	);
};
export default LogoutButton;
