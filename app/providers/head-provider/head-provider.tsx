import Head from 'next/head';
import HeadProgressBar from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';

import { ACCENT_COLOR } from '@/utils/consts';

import Favicons from './favicons';

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<HeadProgressBar
				color={ACCENT_COLOR}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, maximum-scale=1.0"
				/>
				<Favicons />
				<meta
					name="theme-color"
					content={'#1759e9'}
				/>
				<meta
					name="msapplication-navbutton-color"
					content={'#1759e9'}
				/>
				<meta
					name="apple-mobile-web-app-status-bar-style"
					content={'#1759e9'}
				/>
			</Head>
			{children}
		</>
	);
};
export default HeadProvider;
