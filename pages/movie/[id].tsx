import { GetServerSideProps, NextPage } from 'next';

import SingleMovie from '@/components/screens/single-movie/single-movie';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';

import { IMovie } from '@/shared/types/movie.type';

import { MovieService } from '@/services/movie.service';

import { getMovieRoute } from '@/config/url.config';

import Error404 from '../404';

export interface IMoviePage {
	movie: IMovie;
	similarMovies: IGalleryItem[];
}

const MoviePage: NextPage<IMoviePage> = ({ movie, similarMovies }) => {
	return movie ? (
		<SingleMovie
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

		return {
			props: {
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
