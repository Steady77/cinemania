import { FC } from 'react';

import MoviesContainer from './movies-container/movies-container';
import Search from './search/search';
import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  );
};
export default Sidebar;
