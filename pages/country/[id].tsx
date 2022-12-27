import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import CountryCatalog from '@/components/ui/catalogs/country-catalog';

import { IFilmByFilters } from '@/shared/types/movie.types';

import { FiltersService } from '@/services/filters.service';
import { MovieService } from '@/services/movie.service';

interface ICountryPage {
	items: IFilmByFilters[];
	country: string;
}

const CountryPage: NextPage<ICountryPage> = ({ country }) => {
	return (
		<CountryCatalog
			title={country}
			description={`Фильмы и сериалы сделанные в ${country}`}
		/>
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
	const queryClient = new QueryClient();
	const id = Number(params?.id);

	try {
		const {
			data: { countries },
		} = await FiltersService.getGenresCountries();

		const country = countries.find((obj) => obj.id === id)?.country;

		await queryClient.prefetchInfiniteQuery(
			['movies by country'],
			({ pageParam = 1 }) =>
				MovieService.getByFilters({ countries: id, page: pageParam }),
		);

		return {
			props: {
				dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
				country,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default CountryPage;
