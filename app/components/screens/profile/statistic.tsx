import { FC } from 'react';

import Description from '@/components/ui/heading/description';
import SubHeading from '@/components/ui/heading/sub-heading';

interface StatisticProps {
	totalWatch: number;
}

const Statistic: FC<StatisticProps> = ({ totalWatch }) => {
	return (
		<div>
			<SubHeading title="Статистика" />
			<Description text={`Фильмов просмотрено: ${totalWatch}`} />
		</div>
	);
};

export default Statistic;
