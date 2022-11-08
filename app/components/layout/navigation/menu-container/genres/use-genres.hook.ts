import { useQuery } from 'react-query';

import { FiltersService } from '@/services/filters.service';

import { capitalizeFirstLetter } from '@/utils/string';

import { getGenreRoute } from '@/config/url.config';

import { IMenuItem } from '../menu.interface';

export const useGenres = () => {
	const queryData = useQuery(
		'genres menu',
		() => FiltersService.getGenresCountries(),
		{
			select: ({ data: { genres } }) =>
				genres
					.map(
						({ genre, id }) =>
							({
								title: genre,
								link: getGenreRoute(String(id)),
								icon: 'MdThumbUp',
							} as IMenuItem),
					)
					.sort(() => Math.random() - 0.5)
					.splice(0, 4)
					.map((item) => ({
						...item,
						title: capitalizeFirstLetter(item.title),
					})),
		},
	);

	return queryData;
};
