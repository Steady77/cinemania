import { NextPage } from 'next';

import TrendsCatalog from '@/components/ui/catalogs/trends-catalog/trends-catalog';

const TrendsPage: NextPage = () => {
	return (
		<TrendsCatalog
			title="В тренде"
			description={`Топ 100 самых популярных фильмов и сериалов`}
		/>
	);
};

export default TrendsPage;
