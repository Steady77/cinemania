import { FC } from 'react';

import { useMouseScroll } from '../gallery/use-mouse-scroll.hook';
import Heading from '../heading/heading';

import { ListItem } from './list-item';
import { IList } from './list.interface';
import styles from './list.module.scss';

export const List: FC<{ items: IList[] }> = ({ items }) => {
	const { ref, mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
		useMouseScroll();

	if (items.length === 0) {
		return (
			<Heading
				className="text-center text-xl py-7"
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
			className={styles.list}
		>
			{items.map((item) => (
				<ListItem
					key={item.link}
					item={item}
				/>
			))}
		</div>
	);
};
