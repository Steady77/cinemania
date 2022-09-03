import { ChangeEvent, FC } from 'react';

import MaterialIcon from '../material-icon';

import styles from './search-input.module.scss';

interface ISearchInput {
  searchValue: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: FC<ISearchInput> = ({ searchValue, handleSearch }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input
        placeholder="Поиск"
        value={searchValue}
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchInput;
