import { FC } from 'react';

import styles from '@/components/layout/navigation/menu-container/menu.module.scss';

import AuthItems from './auth/auth-items';
import MenuItem from './menu-item';
import { IMenu } from './menu.interface';

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
        {title === 'General' && <AuthItems />}
      </ul>
    </div>
  );
};
export default Menu;
