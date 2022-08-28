import { FC, PropsWithChildren } from 'react';

import styles from './layout.module.scss';
import Navigation from './navigation/navigation';
import Sidebar from './sidebar/sidebar';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.center}>{children}</div>
      <Sidebar />
    </div>
  );
};

export default Layout;
