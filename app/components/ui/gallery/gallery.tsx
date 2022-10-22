import { FC } from 'react';

import GalleryItem from './gallery-item';
import { IGalleryItem } from './gallery.interface';
import styles from './gallery.module.scss';
import { useGallery } from './use-gallery.hook';

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	const { ref, mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
		useGallery();

	return (
		<div
			ref={ref}
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseUpHandler}
			onMouseMove={mouseMoveHandler}
			className={styles.gallery}
		>
			{items.map((item) => (
				<GalleryItem
					key={item.link}
					item={item}
					variant="vertical"
				/>
			))}
		</div>
	);
};
export default Gallery;
