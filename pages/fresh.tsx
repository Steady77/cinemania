import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetStaticProps, NextPage } from 'next';

import FreshCatalog from '@/components/ui/catalogs/fresh-catalog/fresh-catalog';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';

const FreshPage: NextPage = () => {
	return (
		<FreshCatalog
			title="Свежие цифровые релизы"
			description={`Недавние цифровые релизы фильмов и сериалов за ${getCurrentMonth(
				'ru',
			)} ${getCurrentYear()}`}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const queryClient = new QueryClient();

	try {
		const yaer = getCurrentYear();
		const month = getCurrentMonth('en');

		await queryClient.prefetchInfiniteQuery(
			['fresh movies'],
			({ pageParam = 1 }) => MovieService.getReleases(yaer, month, pageParam),
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

export default FreshPage;
