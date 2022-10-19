import { FC, MouseEvent, useRef, useState } from 'react';

import GalleryItem from './gallery-item';
import { IGalleryItem } from './gallery.interface';
import styles from './gallery.module.scss';

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	const galleryContainer = useRef<HTMLDivElement>(null);
	const [isScrolling, setIsScrolling] = useState(false);
	const [clientX, setClientX] = useState(0);
	const [scrollX, setScrollX] = useState(0);

	const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
		if (galleryContainer.current) {
			e.preventDefault();
			setIsScrolling(true);
			setClientX(e.clientX);
			setScrollX(galleryContainer.current.scrollLeft);
			galleryContainer.current.style.cursor = 'grabbing';
			galleryContainer.current.style.userSelect = 'none';
		}
	};

	const mouseUpHandler = () => {
		if (galleryContainer.current) {
			setIsScrolling(false);
			galleryContainer.current.style.cursor = 'grab';
			galleryContainer.current.style.removeProperty('user-select');
		}
	};

	const mouseMoveHandler = (e: MouseEvent) => {
		if (isScrolling) {
			if (galleryContainer.current) {
				galleryContainer.current.scrollLeft = scrollX - (e.clientX - clientX);
				setScrollX(scrollX - (e.clientX - clientX));
				setClientX(e.clientX);
			}
		}
	};
	return (
		<div
			ref={galleryContainer}
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
