import { FC } from 'react';

import Banner from '@/components/ui/banner/banner';
import StaffCatalog from '@/components/ui/catalogs/staff-catalog/staff-catalog';
import Gallery from '@/components/ui/gallery/gallery';
import Description from '@/components/ui/heading/description';
import SubHeading from '@/components/ui/heading/sub-heading';

import Meta from '@/utils/meta/meta';

import { IMoviePage } from '../../../../pages/movie/[id]';

import Content from './content/content';

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies, staff }) => {
	return (
		<Meta
			title={movie.nameRu}
			description={movie.description}
		>
			<Banner
				image={movie.coverUrl || movie.posterUrl}
				Detail={() => <Content movie={movie} />}
			/>

			<Description
				text={movie.description}
				className="px-8 pb-8 rounded-b-layout text-opacity-90 bg-blue-950 max-w-6xl mx-auto"
			/>

			<div className="my-10">
				<SubHeading title="Актеры и создатели" />
				<StaffCatalog persons={staff} />
			</div>

			<div className="my-10">
				<SubHeading title="Похожие фильмы" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	);
};
export default SingleMovie;
