import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';
import { IHome } from '@/components/screens/home/home.interface';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';
import { getGenresList } from '@/utils/movie/get-string-of-genres';

import { getMovieRoute } from '@/config/url.config';

const HomePage: NextPage<IHome> = ({ slides, releases, tvSeries }) => {
	return (
		<Home
			slides={slides}
			releases={releases}
			tvSeries={tvSeries}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const yaer = getCurrentYear();
		const month = getCurrentMonth('en');

		const { data: premieres } = await MovieService.getPremieres(yaer, month);

		const slides: ISlide[] = premieres.items.map((movie) => ({
			kinopoiskId: movie.kinopoiskId,
			posterUrl: movie.posterUrl,
			link: getMovieRoute(movie.kinopoiskId),
			subTitle: getGenresList(movie.genres),
			nameRu: movie.nameRu,
		}));

		const { data: releasesData } = await MovieService.getTop(
			'TOP_250_BEST_FILMS',
		);

		const releases: IGalleryItem[] = releasesData.films.map((movie) => ({
			name: movie.nameRu,
			link: getMovieRoute(movie.filmId),
			posterPath: movie.posterUrlPreview,
			content: {
				title: movie.nameRu,
				subTitle: movie.year,
			},
		}));

		const { data: tvSeriesData } = await MovieService.getByFilters({
			type: 'TV_SERIES',
			yearFrom: getCurrentYear(),
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
				slides,
				releases,
				tvSeries,
			} as IHome,
		};
	} catch (error) {
		return {
			props: {
				slides: [],
				releases: [],
				tvSeries: [],
			},
		};
	}
};

export default HomePage;
