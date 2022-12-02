import { FC, PropsWithChildren } from 'react';

import Header from './header/header';
import styles from './layout.module.scss';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.layout}>
			<Header />
			<section className={styles.center}>{children}</section>
		</main>
	);
};

export default Layout;
