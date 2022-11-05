import { FC } from 'react';

import Header from '../header/header';

import GalleryItem from './gallery-item';
import { IGalleryItem } from './gallery.interface';
import styles from './gallery.module.scss';
import { useGallery } from './use-gallery.hook';

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	const { ref, mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
		useGallery();

	if (items.length === 0) {
		return (
			<Header
				className="text-center text-xl"
				title="Фильмы не найдены"
			/>
		);
	}

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
