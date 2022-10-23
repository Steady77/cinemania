import { GetStaticProps, NextPage } from 'next';

import CatalogMovies from '@/components/ui/catalog-movies/catalog-movies';

import { IReleaseMovie } from '@/shared/types/movie.type';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';

const FreshPage: NextPage<{ releases: IReleaseMovie[] }> = ({ releases }) => {
	return (
		<CatalogMovies
			title="Свежие цифровые релизы"
			movies={releases || []}
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

		const {
			data: { releases },
		} = await MovieService.getReleases(yaer, month);

		return {
			props: {
				releases,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default FreshPage;
