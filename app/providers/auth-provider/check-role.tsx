import { useRouter } from 'next/router';
import { FC, PropsWithChildren } from 'react';

import { useAuth } from '@/hooks/use-auth.hook';

import { ComponentRoleType } from '@/shared/types/auth.types';

const CheckRole: FC<PropsWithChildren<ComponentRoleType>> = ({
	children,
	Component: { isAdminPage, isUserPage },
}) => {
	const { user } = useAuth();
	const router = useRouter();
	const Children = () => <>{children}</>;

	if (user?.isAdmin) return <Children />;

	if (isAdminPage) {
		router.pathname !== '/404' && router.replace('/404');
		return null;
	}

	const isAuthUser = user && !user.isAdmin;

	if (isAuthUser && isUserPage) return <Children />;
	else {
		router.pathname !== '/auth' && router.replace('/auth');
		return null;
	}
};

export default CheckRole;
