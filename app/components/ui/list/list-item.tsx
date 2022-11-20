import Link from 'next/link';
import { FC } from 'react';

import Rating from '../rating/rating';

import { IList } from './list.interface';
import styles from './list.module.scss';

export const ListItem: FC<{ item: IList }> = ({ item }) => {
	return (
		<Link href={item.link}>
			<a className={styles.item}>
				<p className={styles.text}>{item.name}</p>
				{item.rating && (
					<Rating
						className="justify-center"
						rating={item.rating}
						icon="MdStarRate"
					/>
				)}
			</a>
		</Link>
	);
};
