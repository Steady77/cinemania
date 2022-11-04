import cn from 'classnames';
import { FC } from 'react';

import { MaterialIconNameType } from '@/shared/types/icon.types';

import MaterialIcon from '../material-icon';

import styles from './rating.module.scss';

interface IRating {
	rating: number | string;
	text?: string;
	icon: MaterialIconNameType;
	className?: string;
}

const Rating: FC<IRating> = ({ rating, icon, text, className }) => {
	return (
		<div className={cn(styles.rating, className)}>
			{text && <span className={styles.text}>{text}</span>}
			<MaterialIcon name={icon} />
			{rating ? <span>{rating}</span> : <span>--</span>}
		</div>
	);
};
export default Rating;
