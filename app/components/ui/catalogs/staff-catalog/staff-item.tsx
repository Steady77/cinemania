import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import styles from './staff-catalog.module.scss';
import { IStaffItemProps } from './staff.interface';

const StaffItem: FC<IStaffItemProps> = ({ person }) => {
	return (
		<Link href={person.link}>
			<a className={styles.item}>
				<div className={styles.avatar}>
					<Image
						src={person.posterPath || ''}
						alt={person.name}
						layout="fill"
						priority
					/>
				</div>
				<p className={styles.text}>{person.name}</p>
			</a>
		</Link>
	);
};
export default StaffItem;
