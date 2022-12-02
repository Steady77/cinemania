import { FC, useCallback, useRef, useState } from 'react';

import SearchInput from '@/components/ui/search-input/search-input';

import { useOnClickOutside } from '@/hooks/use-outside-click.hook';

import SearchList from './search-list/search-list';
import { useSearch } from './search-list/use-search.hook';
import styles from './search.module.scss';

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchValue, handleClear } =
		useSearch();

	const ref = useRef(null);
	const [isOpen, setOpen] = useState(false);

	const handler = useCallback(() => {
		setOpen(false);
		handleClear();
	}, []);

	useOnClickOutside(ref, handler);

	return (
		<div
			ref={ref}
			onClick={() => {
				setOpen(true);
			}}
			className={styles.search}
		>
			<SearchInput
				handleSearch={handleSearch}
				searchValue={searchValue}
				handleClear={handleClear}
			/>
			{isSuccess && isOpen && <SearchList movies={data || []} />}
		</div>
	);
};
export default Search;
