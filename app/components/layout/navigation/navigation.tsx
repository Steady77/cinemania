import { FC, memo } from 'react';

import Logo from './logo';
import MenuContainer from './menu-container/menu-container';
import styles from './navigation.module.scss';

const Navigation: FC = memo(() => {
	return (
		<aside className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</aside>
	);
});

Navigation.displayName = 'Navigation';

export default Navigation;
