import { GetServerSideProps, NextPage } from 'next';

import SingleMovie from '@/components/screens/single-movie/single-movie';

import { IMovie } from '@/shared/types/movie.type';

import { MovieService } from '@/services/movie.service';

import Error404 from '../404';

export interface IMoviePage {
	movie: IMovie;
}

const MoviePage: NextPage<IMoviePage> = ({ movie }) => {
	return movie ? <SingleMovie movie={movie} /> : <Error404 />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	try {
		const { data: movie } = await MovieService.getById(String(params?.id));

		return {
			props: {
				movie,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default MoviePage;
