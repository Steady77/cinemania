import { FC } from 'react';
import { useQuery } from 'react-query';

import MaterialIcon from '@/components/ui/material-icon';

import { IMovie } from '@/shared/types/movie.type';

import { GenreService } from '@/services/genre.service';

import { getGenreRoute } from '@/config/url.config';

import ContentList from './content-list/content-list';
import styles from './content.module.scss';

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { data: genresIds } = useQuery(
		'genres single movie',
		() => GenreService.getGenres(),
		{
			select: ({ data: { genres } }) => genres,
		},
	);

	return (
		<div className={styles.content}>
			<h1 className={styles.title}>{movie.nameRu}</h1>
			<div className={styles.details}>
				<span>{movie.year} · </span>
				<span>{movie.countries[0].country} · </span>
				<span>{movie.filmLength} мин.</span>
			</div>
			<ContentList
				name="Жанры"
				links={movie.genres.map((g) => ({
					link: getGenreRoute(
						String(genresIds?.find((obj) => obj.genre === g.genre)?.id),
					),
					title: g.genre,
				}))}
			/>
			<div className={styles.rating}>
				<span className="pr-2">Кинопоиск</span>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.ratingKinopoisk}</span>
			</div>
		</div>
	);
};
export default Content;
