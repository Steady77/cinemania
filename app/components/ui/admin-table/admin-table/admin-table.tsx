import { FC } from 'react';

import ContentLoader from '../../content-loader';

import AdminTableHeader from './admin-table-header';
import AdminTableItem from './admin-table-item';
import { ITableItem } from './admin-table.interface';
import styles from './admin-table.module.scss';

interface IAdminTable {
	tableItems: ITableItem[];
	isLoading: boolean;
	headerItems: string[];
	removeHandler: (id: string) => void;
}

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<div className={styles.table}>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<ContentLoader
					count={1}
					height={48}
					className="mt-4"
				/>
			) : tableItems.length ? (
				tableItems.map((item) => (
					<AdminTableItem
						key={item.id}
						removeHandler={() => removeHandler(item.id)}
						tableItem={item}
					/>
				))
			) : (
				<div className={styles.notFound}>Не найдено</div>
			)}
		</div>
	);
};

export default AdminTable;
