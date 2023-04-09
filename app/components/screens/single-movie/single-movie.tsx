import { FC } from 'react';

import Banner from '@/components/ui/banner/banner';
import StaffCatalog from '@/components/ui/catalogs/staff-catalog/staff-catalog';
import Gallery from '@/components/ui/gallery/gallery';
import Description from '@/components/ui/heading/description';
import SubHeading from '@/components/ui/heading/sub-heading';

import Meta from '@/utils/meta/meta';

import { IMoviePage } from '../../../../pages/movie/[id]';

import Content from './content/content';
import styles from './single-movie.module.scss';

const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies, staff }) => {
	return (
		<Meta
			title={movie.nameRu}
			description={movie.description}
		>
			<section>
				<Banner
					image={movie.coverUrl || movie.posterUrl}
					Detail={() => <Content movie={movie} />}
				/>

				<Description
					text={movie.description}
					className={styles.description}
				/>

				<div className="my-10">
					<SubHeading title="Актеры и создатели" />
					<StaffCatalog persons={staff} />
				</div>

				<div className="my-10">
					<SubHeading title="Похожие фильмы" />
					<Gallery items={similarMovies} />
				</div>
			</section>
		</Meta>
	);
};
export default SingleMovie;
