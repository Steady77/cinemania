import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps, NextPage } from 'next';

import TrendsCatalog from '@/components/ui/catalogs/trends-catalog/trends-catalog';

import { MovieService } from '@/services/movie.service';

const TrendsPage: NextPage = () => {
	return (
		<TrendsCatalog
			title="В тренде"
			description={`Топ 100 самых популярных фильмов и сериалов`}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	try {
		await queryClient.prefetchInfiniteQuery(
			['popular movies'],
			({ pageParam = 1 }) =>
				MovieService.getTop('TOP_100_POPULAR_FILMS', pageParam),
		);

		return {
			props: {
				dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default TrendsPage;
