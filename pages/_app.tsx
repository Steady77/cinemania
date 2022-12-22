import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import MainProvider from 'providers/main-provider';
import { useState } from 'react';

import { ComponentRoleType } from '@/shared/types/auth.types';

import '@/assets/styles/globals.scss';

type AppPropsType = AppProps & ComponentRoleType;

const options = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
};

function MyApp({ Component, pageProps }: AppPropsType) {
	const [queryClient] = useState(() => new QueryClient(options));

	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<MainProvider Component={Component}>
					<Component {...pageProps} />
				</MainProvider>
			</Hydrate>
		</QueryClientProvider>
	);
}

export default MyApp;
