import { FC } from 'react';

import styles from '@/components/ui/menu/menu.module.scss';

import MenuItem from './menu-item';
import { IMenu } from './menu.interface';

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<nav className={styles.menu}>
			<ul className={styles.list}>
				{items.map((item) => (
					<MenuItem
						item={item}
						key={item.link}
					/>
				))}
			</ul>
		</nav>
	);
};
export default Menu;
