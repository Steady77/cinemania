import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import styles from './avatar.module.scss';

interface IAvatar {
	size: 'big' | 'small';
	img: string | undefined;
	className?: string;
}

const Avatar: FC<IAvatar> = ({ img, size, className }) => {
	return (
		<div
			className={cn(styles.avatar, className, {
				[styles.big]: size === 'big',
				[styles.small]: size === 'small',
			})}
		>
			<Image
				src={img || ''}
				alt="avatar"
				layout="fill"
			/>
		</div>
	);
};

export default Avatar;
