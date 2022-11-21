import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import Catalog from '@/components/ui/catalogs/catalog';

import { IFilmByFilters } from '@/shared/types/movie.types';

import { FiltersService } from '@/services/filters.service';
import { MovieService } from '@/services/movie.service';

import Error404 from '../404';

interface ICountryPage {
	items: IFilmByFilters[];
	country: string;
}

const CountryPage: NextPage<ICountryPage> = ({ items, country }) => {
	return country ? (
		<Catalog
			title={country}
			description={`Фильмы и сериалы сделанные в ${country}`}
			movies={items || []}
		/>
	) : (
		<Error404 />
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {
			data: { countries },
		} = await FiltersService.getGenresCountries();
		const paths = countries.map((country) => ({
			params: { id: String(country.id) },
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
			data: { countries },
		} = await FiltersService.getGenresCountries();

		const country = countries.find((obj) => obj.id === id)?.country;

		const {
			data: { items },
		} = await MovieService.getByFilters({ countries: id });

		return {
			props: {
				country,
				items,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default CountryPage;
