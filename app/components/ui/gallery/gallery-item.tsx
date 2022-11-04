import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Rating from '../rating/rating';

import { IGalleryItemProps } from './gallery.interface';
import styles from './gallery.module.scss';

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {
	return (
		<Link href={item.link}>
			<a
				className={cn(styles.item, {
					[styles.withText]: item.content,
					[styles.horizontal]: variant === 'horizontal',
					[styles.vertical]: variant === 'vertical',
				})}
			>
				<Image
					src={item.posterPath}
					alt={item.name}
					layout="fill"
					draggable={false}
					priority
				/>
				{item.content && (
					<div className={styles.content}>
						<h6 className={styles.title}>{item.content.title}</h6>
						{item.content.subTitle && (
							<Rating
								className="justify-center"
								rating={item.content.subTitle}
								icon="MdStarRate"
							/>
						)}
					</div>
				)}
			</a>
		</Link>
	);
};
export default GalleryItem;
