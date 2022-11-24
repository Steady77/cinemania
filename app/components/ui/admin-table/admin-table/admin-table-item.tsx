import { FC } from 'react';

import AdminActions from './admin-actions/admin-actions';
import { IAdminTableItem } from './admin-table.interface';
import styles from './admin-table.module.scss';

const AdminTableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((item) => (
				<div key={item}>{item}</div>
			))}

			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	);
};

export default AdminTableItem;
