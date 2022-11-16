import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalog/catalog';

import { IFilmByFilters } from '@/shared/types/movie.types';

import { FiltersService } from '@/services/filters.service';
import { MovieService } from '@/services/movie.service';

import { capitalizeFirstLetter } from '@/utils/string';

import Error404 from '../404';

interface IGenrePage {
	items: IFilmByFilters[];
	genre: string;
}

const GenrePage: NextPage<IGenrePage> = ({ items, genre }) => {
	return genre ? (
		<Catalog
			title={capitalizeFirstLetter(genre)}
			description={`Фильмы и сериалы жанра ${genre}`}
			movies={items || []}
		/>
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {
			data: { genres },
		} = await FiltersService.getGenresCountries();
		const paths = genres.map((genre) => ({
			params: { id: String(genre.id) },
		}));

		return {
			paths,
			fallback: 'blocking',
		};
	} catch (error) {
		return {
			paths: [],
			fallback: false,
		};
	}
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	let id = Number(params?.id);

	try {
		const {
			data: { genres },
		} = await FiltersService.getGenresCountries();

		const genre = genres.find((obj) => obj.id === id)?.genre;

		const {
			data: { items },
		} = await MovieService.getByFilters({ genres: id });

		return {
			props: {
				genre,
				items,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
