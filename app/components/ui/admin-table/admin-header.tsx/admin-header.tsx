import { ChangeEvent, FC } from 'react';

import SearchInput from '../../search-input/search-input';

import AdminCreateButton from './admin-create-button';
import styles from './admin-header.module.scss';

interface IAdminHeader {
	handleClear: () => void;
	onClick?: () => void;
	searchValue: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AdminHeader: FC<IAdminHeader> = ({
	handleSearch,
	searchValue,
	onClick,
	handleClear,
}) => {
	return (
		<div className={styles.header}>
			<SearchInput
				searchValue={searchValue}
				handleSearch={handleSearch}
				handleClear={handleClear}
			/>
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	);
};

export default AdminHeader;
