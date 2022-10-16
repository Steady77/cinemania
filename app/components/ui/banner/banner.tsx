import Image from 'next/image';
import { FC } from 'react';

import styles from './banner.module.scss';

interface IBanner {
	image: string;
	Detail?: FC | null;
}

const Banner: FC<IBanner> = ({ image, Detail }) => {
	return (
		<div className={styles.banner}>
			<Image
				src={image}
				layout="fill"
				className="image-like-bg"
				priority
				unoptimized
				alt=""
			/>
			{Detail && <Detail />}
		</div>
	);
};
export default Banner;
