import Cookies from 'js-cookie';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { FC, PropsWithChildren, useEffect } from 'react';

import { useActions } from '@/hooks/use-actions.hook';
import { useAuth } from '@/hooks/use-auth.hook';

import { ComponentRoleType } from '@/shared/types/auth.types';

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/utils/consts';

const DynamicCheckRole = dynamic(() => import('./check-role'), { ssr: false });

const AuthProvider: FC<PropsWithChildren<ComponentRoleType>> = ({
	children,
	Component: { isAdminPage, isUserPage },
}) => {
	const { user } = useAuth();
	const { logout, checkAuth } = useActions();

	const { pathname } = useRouter();

	useEffect(() => {
		const accessToken = Cookies.get(ACCESS_TOKEN);

		if (accessToken) checkAuth();
	}, []);

	useEffect(() => {
		const refreshToken = Cookies.get(REFRESH_TOKEN);

		if (!refreshToken && user) logout();
	}, [pathname]);

	return !isAdminPage && !isUserPage ? (
		<>{children}</>
	) : (
		<DynamicCheckRole Component={{ isAdminPage, isUserPage }}>
			{children}
		</DynamicCheckRole>
	);
};

export default AuthProvider;
