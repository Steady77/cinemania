import cn from 'classnames';
import { FC } from 'react';

import styles from './admin-table.module.scss';

const AdminTableHeader: FC<{ headerItems: string[] }> = ({ headerItems }) => {
	return (
		<div className={cn(styles.item, styles.itemHeader)}>
			{headerItems.map((item) => (
				<div key={item}>{item}</div>
			))}
			<div>Действия</div>
		</div>
	);
};

export default AdminTableHeader;
