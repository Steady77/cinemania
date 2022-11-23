import type { AppProps } from 'next/app';
import MainProvider from 'providers/main-provider';

import { ComponentRoleType } from '@/shared/types/auth.types';

import '@/assets/styles/globals.scss';

type AppPropsType = AppProps & ComponentRoleType;

function MyApp({ Component, pageProps }: AppPropsType) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	);
}

export default MyApp;
