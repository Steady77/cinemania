import { FC } from 'react';

import SearchInput from '@/components/ui/search-input/search-input';

import SearchList from './search-list/search-list';
import { useSearch } from './search-list/use-search.hook';
import styles from './search.module.scss';

const Search: FC = () => {
	const { isSuccess, data, handleSearch, searchValue, handleClear } =
		useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchInput
				handleSearch={handleSearch}
				searchValue={searchValue}
				handleClear={handleClear}
			/>
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};
export default Search;
