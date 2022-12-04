import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import Rating from '@/components/ui/rating/rating';

import { useActions } from '@/hooks/use-actions.hook';
import { useTypedSelector } from '@/hooks/use-typed-selector.hook';

import { IMovie } from '@/shared/types/movie.types';

import { convertAge } from '@/utils/movie/convert-age';

import { getCountryRoute, getGenreRoute } from '@/config/route.config';

import ContentList from './content-list/content-list';
import styles from './content.module.scss';

const Content: FC<{ movie: IMovie }> = ({ movie }) => {
	const { countries, genres } = useTypedSelector((state) => state.filtersSlice);
	const { getGenresCountries } = useActions();
	const { push } = useRouter();

	useEffect(() => {
		getGenresCountries();
	}, []);

	return (
		<div className={styles.content}>
			<h4 className={styles.title}>{movie.nameRu}</h4>
			<div className={styles.details}>
				<span>{movie.year} год</span>
				{movie.filmLength && <span> · {movie.filmLength} мин.</span>}
				<span> {convertAge(movie.ratingAgeLimits)}</span>
			</div>
			<ContentList
				name="Жанры:"
				links={movie.genres.map((g) => ({
					link: getGenreRoute(
						String(genres?.find((obj) => obj.genre === g.genre)?.id),
					),
					title: g.genre,
				}))}
			/>
			<ContentList
				name="Страны:"
				links={movie.countries.map((c) => ({
					link: getCountryRoute(
						String(countries?.find((obj) => obj.country === c.country)?.id),
					),
					title: c.country,
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
			<button
				onClick={() => push(`/watch/${movie.kinopoiskId}`)}
				className={styles.button}
			>
				Смотреть
			</button>
		</div>
	);
};
export default Content;
