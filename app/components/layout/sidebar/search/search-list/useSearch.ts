import { ChangeEvent, useState } from 'react';
import { useQuery } from 'react-query';

import { useDebounce } from '@/hooks/useDebounce';

import { MovieService } from '@/services/movie.service';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearch = useDebounce(searchValue, 500);

  const { isSuccess, data } = useQuery(
    ['search movie', debouncedSearch],
    () => MovieService.getMovies(debouncedSearch),
    {
      select: ({ data }) => data.items,
      enabled: !!debouncedSearch,
    },
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return { isSuccess, handleSearch, data, searchValue };
};
