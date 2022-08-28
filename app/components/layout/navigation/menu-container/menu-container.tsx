import { FC } from 'react';

import GenreMenu from './genres/genre-menu';
import Menu from './menu';
import { firstMenu, userMenu } from './menu.data';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  );
};
export default MenuContainer;
