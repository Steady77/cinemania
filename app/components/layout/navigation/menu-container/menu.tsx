import dynamic from 'next/dynamic';
import { FC } from 'react';

import styles from '@/components/layout/navigation/menu-container/menu.module.scss';

import MenuItem from './menu-item';
import { IMenu } from './menu.interface';

const DynamicAuthItems = dynamic(() => import('./auth/auth-items'), {
  ssr: false,
});

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
  return (
    <div className={styles.menu}>
      <div className={styles.heading}>{title}</div>
      <ul className={styles.ul}>
        {items.map((item) => (
          <MenuItem
            item={item}
            key={item.link}
          />
        ))}
        {title === 'Прочее' && <DynamicAuthItems />}
      </ul>
    </div>
  );
};
export default Menu;
