import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react';

export const useGallery = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [isPressed, setIsPressed] = useState(false);
	const [isDragging, setIsDragging] = useState(false);
	const [clientX, setClientX] = useState(0);
	const [scrollX, setScrollX] = useState(0);

	useEffect(() => {
		const gallery = ref.current;

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
		const gallery = ref.current;
		setIsPressed(true);
		setClientX(e.clientX);

		if (gallery) {
			setScrollX(gallery.scrollLeft);
		}
	};

	const mouseUpHandler = () => {
		const gallery = ref.current;

		if (gallery) {
			if (isDragging) {
				ref.current.childNodes.forEach((child: ChildNode) => {
					child.addEventListener('click', preventClick);
				});
			} else {
				ref.current.childNodes.forEach((child: ChildNode) => {
					child.removeEventListener('click', preventClick);
				});
			}

			setIsDragging(false);
			setIsPressed(false);
		}
	};

	const mouseMoveHandler = (e: MouseEvent) => {
		const gallery = ref.current;

		if (gallery) {
			if (isPressed) {
				setIsDragging(true);
				gallery.scrollLeft = scrollX - (e.clientX - clientX);
				setScrollX(scrollX - (e.clientX - clientX));
				setClientX(e.clientX);
			}
		}
	};

	return { ref, mouseDownHandler, mouseUpHandler, mouseMoveHandler };
};
