import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import logoImg from '@/assets/images/logo.svg';

import styles from './logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href="/">
			<a className={styles.logo}>
				<Image
					src={logoImg}
					alt="Cinemania"
					width={176}
					height={48}
					priority
				/>
			</a>
		</Link>
	);
};
export default Logo;
