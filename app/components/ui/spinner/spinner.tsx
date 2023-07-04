import { FC } from 'react';

import styles from './spinner.module.scss';

const Spinner: FC = () => {
	return (
		<div className="relative z-10 py-6">
			<div className={styles.scalingCircle}>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};

export default Spinner;
