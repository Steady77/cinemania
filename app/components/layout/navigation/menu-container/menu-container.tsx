import { FC } from 'react';

import Menu from './menu';
import { firstMenu, userMenu } from './menu-data';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <Menu menu={userMenu} />
    </div>
  );
};
export default MenuContainer;
