import { ChangeEvent, FC } from 'react';

import SearchInput from '../../search-input/search-input';

import AdminCreateButton from './admin-create-button';
import styles from './admin-header.module.scss';

interface IAdminHeader {
	onClick?: () => void;
	searchValue: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader: FC<IAdminHeader> = ({
	handleSearch,
	searchValue,
	onClick,
}) => {
	return (
		<div className={styles.header}>
			<SearchInput
				searchValue={searchValue}
				handleSearch={handleSearch}
			/>
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	);
};

export default AdminHeader;
