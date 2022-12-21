import { NextPage } from 'next';

import FreshCatalog from '@/components/ui/catalogs/fresh-catalog/fresh-catalog';

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

export default FreshPage;
