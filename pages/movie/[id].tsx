import { GetServerSideProps, NextPage } from 'next';

import SingleMovie from '@/components/screens/single-movie/single-movie';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';

import { IMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';
import { StaffService } from '@/services/staff.service';

import { getArrayOfUnique } from '@/utils/array';

import { getMovieRoute, getStaffRoute } from '@/config/route.config';

import Error404 from '../404';

export interface IMoviePage {
	staff: IGalleryItem[];
	movie: IMovie;
	similarMovies: IGalleryItem[];
}

const MoviePage: NextPage<IMoviePage> = ({ movie, similarMovies, staff }) => {
	return movie ? (
		<SingleMovie
			staff={staff || []}
			movie={movie}
			similarMovies={similarMovies || []}
		/>
	) : (
		<Error404 />
	);
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	try {
		const { data: movie } = await MovieService.getById(id);

		const { data: dataSimilarMovies } = await MovieService.getSimilars(id);

		const similarMovies: IGalleryItem[] = dataSimilarMovies.items.map(
			(movie) => ({
				name: movie.nameRu,
				link: getMovieRoute(movie.filmId),
				posterPath: movie.posterUrlPreview,
				content: {
					title: movie.nameRu,
				},
			}),
		);

		const { data: dataStaff } = await StaffService.getByFilmId(id);

		const uniqueStaff = getArrayOfUnique(dataStaff);

		const staff: IGalleryItem[] = uniqueStaff.map((person) => ({
			name: person.nameRu,
			link: getStaffRoute(person.staffId),
			posterPath: person.posterUrl,
			content: {
				title: person.nameRu,
			},
		}));

		return {
			props: {
				staff,
				movie,
				similarMovies,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default MoviePage;
