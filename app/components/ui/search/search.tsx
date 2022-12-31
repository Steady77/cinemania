import { FC, useCallback, useRef, useState } from 'react';

import SearchInput from '@/components/ui/search-input/search-input';

import { useOnClickOutside } from '@/hooks/use-outside-click.hook';

import MaterialIcon from '../material-icon';

import SearchList from './search-list/search-list';
import { useSearch } from './search-list/use-search.hook';
import styles from './search.module.scss';

const Search: FC = () => {
	const [visible, setVisible] = useState(false);
	const [isOpen, setOpen] = useState(false);

	const { isSuccess, data, handleSearch, searchValue, handleClear } =
		useSearch();

	const ref = useRef(null);

	const handleClose = useCallback(() => {
		setOpen(false);
		handleClear();
		setVisible(false);
	}, []);

	useOnClickOutside(ref, handleClose);

	return (
		<div
			ref={ref}
			onClick={() => {
				setOpen(true);
			}}
			className={styles.search}
		>
			<MaterialIcon
				onClick={() => setVisible(!visible)}
				className={styles.searchIcon}
				name="MdSearch"
			/>
			<SearchInput
				visible={visible}
				handleSearch={handleSearch}
				searchValue={searchValue}
				handleClear={handleClear}
			/>
			{isSuccess && isOpen && (
				<SearchList
					movies={data || []}
					handleClose={handleClose}
				/>
			)}
		</div>
	);
};
export default Search;
