import dynamic from 'next/dynamic';
import { FC } from 'react';

import Logo from '@/components/ui/logo/logo';
import Menu from '@/components/ui/menu/menu';
import { firstMenu } from '@/components/ui/menu/menu.data';
import Search from '@/components/ui/search/search';

import styles from './header.module.scss';

const DynamicAuthItems = dynamic(
	() => import('@/components/ui/menu/profile-menu/profile-items'),
	{
		ssr: false,
	},
);

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<Menu menu={firstMenu} />
			<Search />
			<DynamicAuthItems />
		</header>
	);
};

export default Header;
