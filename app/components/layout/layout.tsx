import { FC, PropsWithChildren } from 'react';

import Header from './header/header';
import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className={styles.center}>{children}</main>
		</div>
	);
};

export default Layout;
