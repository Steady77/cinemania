import { GetStaticProps, NextPage } from 'next';

import TrendsCatalog from '@/components/ui/catalogs/trends-catalog/trends-catalog';

import { ITopResponse } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

const TrendsPage: NextPage<ITopResponse> = ({ films, pagesCount }) => {
	return (
		<TrendsCatalog
			title="В тренде"
			movies={films || []}
			pagesCount={pagesCount}
			description={`Топ 100 самых популярных фильмов и сериалов`}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { films, pagesCount } = await MovieService.getTop(
			'TOP_100_POPULAR_FILMS',
		);

		return {
			props: {
				films,
				pagesCount,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default TrendsPage;
