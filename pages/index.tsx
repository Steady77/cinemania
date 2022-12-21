import type { GetStaticProps, NextPage } from 'next';
import { useEffect } from 'react';

import Home from '@/components/screens/home/home';
import { IHome } from '@/components/screens/home/home.interface';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { IList } from '@/components/ui/list/list.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { useActions } from '@/hooks/use-actions.hook';

import { FiltersService } from '@/services/filters.service';
import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';
import { getGenresList } from '@/utils/movie/get-string-of-genres';
import { capitalizeFirstLetter } from '@/utils/string';

import { getGenreRoute, getMovieRoute } from '@/config/route.config';

const HomePage: NextPage<IHome> = ({ slides, releases, tvSeries, genres }) => {
	const { getGenresCountries } = useActions();

	useEffect(() => {
		getGenresCountries();
	}, []);

	return (
		<Home
			genres={genres}
			slides={slides}
			releases={releases}
			tvSeries={tvSeries}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const currentYear = getCurrentYear();
	const month = getCurrentMonth('en');

	try {
		const { data: genresData } = await FiltersService.getGenresCountries();

		const genres: IList[] = genresData.genres.map((genre) => ({
			link: getGenreRoute(String(genre.id)),
			name: capitalizeFirstLetter(genre.genre),
		}));

		const premieres = await MovieService.getPremieres(currentYear, month);

		const slides: ISlide[] = premieres.items.map((movie) => ({
			kinopoiskId: movie.kinopoiskId,
			posterUrl: movie.posterUrl,
			link: getMovieRoute(movie.kinopoiskId),
			subTitle: getGenresList(movie.genres),
			nameRu: movie.nameRu,
		}));

		const releasesData = await MovieService.getTop('TOP_250_BEST_FILMS');

		const releases: IGalleryItem[] = releasesData.films.map((movie) => ({
			name: movie.nameRu,
			link: getMovieRoute(movie.filmId),
			posterPath: movie.posterUrlPreview,
			content: {
				title: movie.nameRu,
				subTitle: movie.rating,
			},
		}));

		const { data: tvSeriesData } = await MovieService.getByFilters({
			type: 'TV_SERIES',
			yearFrom: currentYear,
		});

		const tvSeries: IGalleryItem[] = tvSeriesData.items.map((movie) => ({
			name: movie.nameRu,
			link: getMovieRoute(movie.kinopoiskId),
			posterPath: movie.posterUrlPreview,
			content: {
				title: movie.nameRu,
				subTitle: movie.ratingKinopoisk,
			},
		}));

		return {
			props: {
				genres,
				slides,
				releases,
				tvSeries,
			} as IHome,
		};
	} catch (error) {
		return {
			props: {
				genres: [],
				slides: [],
				releases: [],
				tvSeries: [],
			},
		};
	}
};

export default HomePage;
