import { FC } from 'react';

import MoviesContainer from './movies-container/movies-container';
import Search from './search/search';
import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
	return (
		<aside className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</aside>
	);
};
export default Sidebar;
