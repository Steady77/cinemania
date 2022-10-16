import { FC } from 'react';

import Banner from '@/components/ui/banner/banner';

import Meta from '@/utils/meta/meta';

import { IMoviePage } from '../../../../pages/movie/[id]';

import Content from './content/content';

const SingleMovie: FC<IMoviePage> = ({ movie }) => {
	return (
		<Meta
			title={movie.nameRu}
			description={movie.description}
		>
			<Banner
				image={movie.posterUrl}
				Detail={() => <Content movie={movie} />}
			/>
		</Meta>
	);
};
export default SingleMovie;
