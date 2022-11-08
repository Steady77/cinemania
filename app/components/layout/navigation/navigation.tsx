import { FC, memo, useEffect } from 'react';

import { useActions } from '@/hooks/use-actions.hook';

import Logo from './logo';
import MenuContainer from './menu-container/menu-container';
import styles from './navigation.module.scss';

const Navigation: FC = memo(() => {
	const { getGenresCountries } = useActions();

	useEffect(() => {
		getGenresCountries();
	}, []);

	return (
		<aside className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</aside>
	);
});

Navigation.displayName = 'Navigation';

export default Navigation;
