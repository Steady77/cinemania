import { FC, PropsWithChildren } from 'react';

import styles from './layout.module.scss';
import Navigation from './navigation/navigation';
import Sidebar from './sidebar/sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<main className={styles.layout}>
			<Navigation />
			<section className={styles.center}>{children}</section>
			<Sidebar />
		</main>
	);
};

export default Layout;
