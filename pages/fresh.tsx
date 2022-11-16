import { GetStaticProps, NextPage } from 'next';

import FreshCatalog from '@/components/ui/fresh-catalog/fresh-catalog';

import { IReleasesResponse } from '@/shared/types/movie.types';

import { MovieService } from '@/services/movie.service';

import { getCurrentMonth, getCurrentYear } from '@/utils/date';

const FreshPage: NextPage<IReleasesResponse> = ({ releases, total }) => {
	return (
		<FreshCatalog
			title="Свежие цифровые релизы"
			movies={releases || []}
			total={total}
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
			data: { releases, total },
		} = await MovieService.getReleases(yaer, month);

		return {
			props: {
				releases,
				total,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default FreshPage;
