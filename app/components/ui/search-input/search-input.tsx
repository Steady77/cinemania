import { ChangeEvent, FC } from 'react';

import MaterialIcon from '../material-icon';

import styles from './search-input.module.scss';

interface ISearchInput {
	searchValue: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClear: () => void;
}

const SearchInput: FC<ISearchInput> = ({
	searchValue,
	handleSearch,
	handleClear,
}) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Поиск"
				value={searchValue}
				onChange={handleSearch}
			/>
			{searchValue && (
				<MaterialIcon
					className={styles.close}
					onClick={handleClear}
					name="MdClose"
				/>
			)}
		</div>
	);
};
export default SearchInput;
