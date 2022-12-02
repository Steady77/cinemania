import Link from 'next/link';
import { FC } from 'react';

import Avatar from '@/components/ui/avatar/avatar';
import ContentLoader from '@/components/ui/content-loader';

import { useAuth } from '@/hooks/use-auth.hook';

import MenuItem from '../menu-item';

import LogoutButton from './logout-button';
import styles from './profile-items.module.scss';

const AuthItems: FC = () => {
	const { user, isLoading } = useAuth();

	return (
		<ul className={styles.profileMenu}>
			{user ? (
				<>
					{isLoading ? (
						<ContentLoader
							circle
							width={28}
							height={28}
						/>
					) : (
						<Link href="/profile">
							<a>
								<Avatar
									img={user?.avatar}
									size="small"
									className="cursor-pointer mr-1"
								/>
							</a>
						</Link>
					)}
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						link: '/auth',
					}}
				/>
			)}

			{user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdOutlineLock',
						link: '/admin',
					}}
				/>
			)}
		</ul>
	);
};
export default AuthItems;
