import { FC, memo } from 'react';

import MoviesContainer from './movies-container/movies-container';
import styles from './sidebar.module.scss';

const Sidebar: FC = memo(() => {
	return (
		<aside className={styles.sidebar}>
			<MoviesContainer />
		</aside>
	);
});

Sidebar.displayName = 'Sidebar';

export default Sidebar;
