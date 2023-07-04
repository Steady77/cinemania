import { RefObject, useEffect, useRef } from 'react';

export const useObserver = (
	ref: RefObject<Element>,
	canLoad: boolean | undefined,
	isLoading: boolean,
	callback: () => void,
) => {
	const observer = useRef<IntersectionObserver>();

	useEffect(() => {
		if (!ref?.current) return;
		if (isLoading) return;
		if (observer.current) observer.current.disconnect();

		const cb = (entries: IntersectionObserverEntry[]) => {
			if (entries[0].isIntersecting && canLoad) {
				callback();
			}
		};

		observer.current = new IntersectionObserver(cb);
		observer.current.observe(ref.current);
	}, [isLoading]);
};
