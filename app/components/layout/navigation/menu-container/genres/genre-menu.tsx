import { FC } from 'react';

import ContentLoader from '@/components/ui/content-loader';

import { useTypedSelector } from '@/hooks/use-typed-selector.hook';

import { capitalizeFirstLetter } from '@/utils/string';

import { getGenreRoute } from '@/config/route.config';

import Menu from '../menu';
import { IMenuItem } from '../menu.interface';

const GenreMenu: FC = () => {
	const { isLoading, genres } = useTypedSelector((state) => state.filtersSlice);

	const data = genres
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
		}));

	return isLoading ? (
		<div className="mx-11 mb-6">
			<ContentLoader
				count={5}
				className="h-7 mt-6"
			/>
		</div>
	) : (
		<Menu menu={{ title: 'Случайные жанры', items: data || [] }} />
	);
};
export default GenreMenu;
