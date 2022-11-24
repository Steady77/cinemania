import { FC } from 'react';

import Logo from './logo';
import MenuContainer from './menu-container/menu-container';
import styles from './navigation.module.scss';

const Navigation: FC = () => {
	return (
		<aside className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</aside>
	);
};

export default Navigation;
