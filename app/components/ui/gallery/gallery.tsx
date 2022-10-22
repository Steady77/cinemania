import {
	FC,
	MouseEvent,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';

import GalleryItem from './gallery-item';
import { IGalleryItem } from './gallery.interface';
import styles from './gallery.module.scss';

const Gallery: FC<{ items: IGalleryItem[] }> = ({ items }) => {
	const galleryRef = useRef<HTMLDivElement>(null);
	const [isPressed, setIsPressed] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [clientX, setClientX] = useState(0);
	const [scrollX, setScrollX] = useState(0);

	useEffect(() => {
		const gallery = galleryRef.current;

		if (gallery) {
			const onWheelHandler = (e: WheelEvent) => {
				e.preventDefault();

				gallery.scrollTo({
					left: gallery.scrollLeft + e.deltaY * 2,
					behavior: 'smooth',
				});
			};

			gallery.addEventListener('wheel', onWheelHandler);

			return () => gallery.removeEventListener('wheel', onWheelHandler);
		}
	}, []);

	const preventClick = useCallback((e: Event) => {
		e.preventDefault();
		e.stopImmediatePropagation();
		// e.stopPropagation();
	}, []);

	const mouseDownHandler = (e: MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		const gallery = galleryRef.current;
		setIsPressed(true);
		setClientX(e.clientX);

		if (gallery) {
			setScrollX(gallery.scrollLeft);
		}
	};

	const mouseUpHandler = () => {
		const gallery = galleryRef.current;

		if (gallery) {
			if (isDragging) {
				galleryRef.current.childNodes.forEach((child: ChildNode) => {
					child.addEventListener('click', preventClick);
				});
			} else {
				galleryRef.current.childNodes.forEach((child: ChildNode) => {
					child.removeEventListener('click', preventClick);
				});
			}

			setIsDragging(false);
			setIsPressed(false);
		}
	};

	const mouseMoveHandler = (e: MouseEvent) => {
		const gallery = galleryRef.current;

		if (gallery) {
			if (isPressed) {
				setIsDragging(true);
				gallery.scrollLeft = scrollX - (e.clientX - clientX);
				setScrollX(scrollX - (e.clientX - clientX));
				setClientX(e.clientX);
			}
		}
	};

	return (
		<div
			ref={galleryRef}
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
