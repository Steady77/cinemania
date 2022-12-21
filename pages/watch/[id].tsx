import { GetServerSideProps } from 'next';

import Watch from '@/components/screens/watch/watch';

import { AuthNextPage } from '@/shared/types/auth.types';
import { IMovie } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

interface IWatchPage {
	movie: IMovie;
}

const WatchPage: AuthNextPage<IWatchPage> = ({ movie }) => {
	return <Watch movie={movie} />;
};

WatchPage.isUserPage = true;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	try {
		const movie = await MovieService.getById(id);

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
