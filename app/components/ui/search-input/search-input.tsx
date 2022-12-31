import cn from 'classnames';
import { ChangeEvent, FC } from 'react';

import MaterialIcon from '../material-icon';

import styles from './search-input.module.scss';

interface ISearchInput {
	visible?: boolean;
	searchValue: string;
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
	handleClear?: () => void;
}

const SearchInput: FC<ISearchInput> = ({
	searchValue,
	handleSearch,
	handleClear,
	visible,
}) => {
	return (
		<div
			className={cn(styles.search, {
				[styles.visible]: visible,
			})}
		>
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
