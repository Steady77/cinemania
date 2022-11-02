import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import GenresCatalog from '@/components/ui/genres-catalog/genres-catalog';

import { IFilmByFilters } from '@/shared/types/movie.type';

import { GenreService } from '@/services/genre.service';
import { MovieService } from '@/services/movie.service';

import { capitalizeFirstLetter } from '@/utils/string';

interface IGenrePage {
	total: number;
	totalPages: number;
	items: IFilmByFilters[];
	genre: string;
}

const GenrePage: NextPage<IGenrePage> = ({ items, totalPages, genre }) => {
	return (
		<GenresCatalog
			title={capitalizeFirstLetter(genre)}
			description={`Фильмы и сериалы жанра ${genre}`}
			movies={items || []}
			pagesCount={totalPages}
		/>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const {
			data: { genres },
		} = await GenreService.getGenres();
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
	let genre;

	try {
		const {
			data: { genres },
		} = await GenreService.getGenres();

		if (isNaN(id)) {
			id = Number(genres.find((obj) => obj.genre === params?.id)?.id);
			genre = params?.id;
		} else {
			genre = genres.find((obj) => obj.id === Number(params?.id))?.genre;
		}

		const {
			data: { items, totalPages },
		} = await MovieService.getByFilters({ genres: id });

		return {
			props: {
				genre,
				items,
				totalPages,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default GenrePage;
