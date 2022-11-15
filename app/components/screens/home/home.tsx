import { FC } from 'react';

import Gallery from '@/components/ui/gallery/gallery';
import Heading from '@/components/ui/heading/heading';
import SubHeading from '@/components/ui/heading/sub-heading';
import Search from '@/components/ui/search/search';
import Slider from '@/components/ui/slider/slider';

import { getCurrentYear } from '@/utils/date';
import Meta from '@/utils/meta/meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ slides, releases, tvSeries }) => {
	return (
		<Meta
			title="Онлайн кинотеатр"
			description="Описание"
		>
			<Search />
			<Heading
				title="Кинопремьеры"
				className="text-blue-300 mb-8"
			/>
			{slides.length && <Slider slides={slides} />}
			<div className="my-10">
				<SubHeading title="Лучшие фильмы" />
				{releases.length && <Gallery items={releases} />}
			</div>
			<div className="my-10">
				<SubHeading title={`Сериалы ${getCurrentYear()}`} />
				{tvSeries.length && <Gallery items={tvSeries} />}
			</div>
		</Meta>
	);
};

export default Home;
