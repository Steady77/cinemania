import { FC } from 'react';

import Banner from '@/components/ui/banner/banner';
import Gallery from '@/components/ui/gallery/gallery';
import Description from '@/components/ui/heading/description';
import SubHeading from '@/components/ui/heading/sub-heading';
import StaffCatalog from '@/components/ui/staff-catalog/staff-catalog';

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
				className="px-8 pb-8 rounded-b-layout text-opacity-90 bg-blue-950"
			/>

			<div className="mt-6">
				<SubHeading title="Актеры и создатели" />
				<StaffCatalog persons={staff} />
			</div>

			<div className="mt-6">
				<SubHeading title="Похожие фильмы" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	);
};
export default SingleMovie;
