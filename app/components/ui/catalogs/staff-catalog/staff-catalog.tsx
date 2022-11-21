import { FC } from 'react';

import { useMouseScroll } from '../../gallery/use-mouse-scroll.hook';
import Heading from '../../heading/heading';

import styles from './staff-catalog.module.scss';
import StaffItem from './staff-item';
import { IStaffItem } from './staff.interface';

const StaffCatalog: FC<{ persons: IStaffItem[] }> = ({ persons }) => {
	const { ref, mouseDownHandler, mouseMoveHandler, mouseUpHandler } =
		useMouseScroll();

	if (persons.length === 0) {
		return (
			<Heading
				className="text-center text-xl"
				title="Актеры и создатели не найдены"
			/>
		);
	}

	return (
		<div
			ref={ref}
			onMouseDown={mouseDownHandler}
			onMouseUp={mouseUpHandler}
			onMouseMove={mouseMoveHandler}
			className={styles.staff}
		>
			{persons.map((person) => (
				<StaffItem
					key={person.link}
					person={person}
				/>
			))}
		</div>
	);
};
export default StaffCatalog;
