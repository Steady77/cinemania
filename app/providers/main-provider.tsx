import { FC, PropsWithChildren } from 'react';
import { Provider } from 'react-redux';

import Layout from '@/components/layout/layout';

import { ComponentRoleType } from '@/shared/types/auth.types';

import { store } from '@/store/store';

import AuthProvider from './auth-provider/auth-provider';
import HeadProvider from './head-provider/head-provider';
import ReduxToast from './redux-toast';

const MainProvider: FC<PropsWithChildren<ComponentRoleType>> = ({
	children,
	Component,
}) => {
	return (
		<HeadProvider>
			<Provider store={store}>
				<ReduxToast />
				<AuthProvider Component={Component}>
					<Layout>{children}</Layout>
				</AuthProvider>
			</Provider>
		</HeadProvider>
	);
};
export default MainProvider;
