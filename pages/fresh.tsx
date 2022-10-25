import { GetServerSideProps, GetStaticProps, NextPage } from 'next';

import CatalogMovies from '@/components/ui/catalog-movies/catalog-movies';

import { IReleaseMovie, IReleasesResp } from '@/shared/types/movie.type';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';

const FreshPage: NextPage<{ data: IReleasesResp }> = ({ data }) => {
	return (
		<CatalogMovies
			title="Свежие цифровые релизы"
			data={data || []}
			description={`Недавние цифровые релизы фильмов и сериалов за ${getCurrentMonth(
				'ru',
			)} ${getCurrentYear()}`}
		/>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const yaer = getCurrentYear();
		const month = getCurrentMonth('en');

		const { data } = await MovieService.getReleases(yaer, month);

		return {
			props: {
				data,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default FreshPage;
