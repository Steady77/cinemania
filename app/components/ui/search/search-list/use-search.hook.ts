import { useQuery } from '@tanstack/react-query';
import { ChangeEvent, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce.hook';

import { MovieService } from '@/services/movie.service';

export const useSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const debouncedSearch = useDebounce(searchValue, 500);

	const { isSuccess, data } = useQuery(
		['search movie', debouncedSearch],
		() => MovieService.getByFilters({ keyword: debouncedSearch }),
		{
			select: ({ data }) => data.items,
			enabled: !!debouncedSearch,
		},
	);

	const handleClear = () => {
		setSearchValue('');
	};

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
	};

	return { isSuccess, handleSearch, data, searchValue, handleClear };
};
