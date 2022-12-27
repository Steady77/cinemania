import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import GenreCatalog from '@/components/ui/catalogs/genre-catalog';

import { FiltersService } from '@/services/filters.service';
import { MovieService } from '@/services/movie.service';

import { capitalizeFirstLetter } from '@/utils/string';

const GenrePage: NextPage<{ genre: string }> = ({ genre }) => {
	return (
		<GenreCatalog
			title={capitalizeFirstLetter(genre)}
			description={`Фильмы и сериалы жанра ${genre}`}
		/>
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
	const queryClient = new QueryClient();
	const id = Number(params?.id);

	try {
		const {
			data: { genres },
		} = await FiltersService.getGenresCountries();

		const genre = genres.find((obj) => obj.id === id)?.genre;

		await queryClient.prefetchInfiniteQuery(
			['movies by genre'],
			({ pageParam = 1 }) =>
				MovieService.getByFilters({ genres: id, page: pageParam }),
		);

		return {
			props: {
				dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
				genre,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
