import { FC } from 'react';

import Banner from '@/components/ui/banner/banner';
import Gallery from '@/components/ui/gallery/gallery';
import SubHeading from '@/components/ui/heading/sub-heading';

import Meta from '@/utils/meta/meta';

import { IMoviePage } from '../../../../pages/movie/[id]';

import Content from './content/content';

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
	return (
		<Meta
			title={movie.nameRu}
			description={movie.description}
		>
			<Banner
				image={movie.posterUrl}
				Detail={() => <Content movie={movie} />}
			/>

			<div className="mt-12">
				<SubHeading title="Похожие фильмы" />
				<Gallery items={similarMovies} />
			</div>
		</Meta>
	);
};
export default SingleMovie;
