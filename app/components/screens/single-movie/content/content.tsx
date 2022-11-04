import { FC } from 'react';
import { useQuery } from 'react-query';

import Rating from '@/components/ui/rating/rating';

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
			<h4 className={styles.title}>{movie.nameRu}</h4>
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
			<Rating
				className="absolute bottom-8 right-8 text-xl opacity-90"
				text="Кинопоиск"
				icon="MdStarRate"
				rating={movie.ratingKinopoisk}
			/>
			<Rating
				className="absolute bottom-14 right-8 text-xl opacity-90"
				text="IMDB"
				icon="MdStarRate"
				rating={movie.ratingImdb}
			/>
		</div>
	);
};
export default Content;
