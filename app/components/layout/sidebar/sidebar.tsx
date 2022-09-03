import { FC } from 'react';

import Search from './search/search';
import styles from './sidebar.module.scss';

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      <Search />
    </div>
  );
};
export default Sidebar;
