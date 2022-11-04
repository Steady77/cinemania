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
		<nav className={styles.menu}>
			<h3 className={styles.heading}>{title}</h3>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem
						item={item}
						key={item.link}
					/>
				))}
				{title === 'Прочее' && <DynamicAuthItems />}
			</ul>
		</nav>
	);
};
export default Menu;
