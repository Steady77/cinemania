import { GetServerSideProps, NextPage } from 'next';

import Watch from '@/components/screens/watch/watch';

import { IMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

interface IWatchPage {
	movie: IMovie;
}

const WatchPage: NextPage<IWatchPage> = ({ movie }) => {
	return <Watch movie={movie} />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	try {
		const { data: movie } = await MovieService.getById(id);

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

export default WatchPage;
