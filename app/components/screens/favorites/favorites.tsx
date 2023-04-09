import { FC } from 'react';

import ContentLoader from '@/components/ui/content-loader';
import Heading from '@/components/ui/heading/heading';

import Meta from '@/utils/meta/meta';

import FavoriteItem from './favorite-item';
import styles from './favorites.module.scss';
import { useFavorites } from './use-favorites.hook';

const Favorites: FC = () => {
	const { isLoading, favoritesMovies } = useFavorites();

	return (
		<Meta title="Избранное">
			<section>
				<Heading title="Избранное" />
				<div>
					{isLoading ? (
						<ContentLoader
							count={4}
							inline
							className={styles.contentLoader}
							containerClassName={styles.loaderContainer}
						/>
					) : (
						<div className={styles.favorites}>
							{favoritesMovies?.map((data, idx) => (
								<FavoriteItem
									movie={data?.data}
									key={idx}
								/>
							))}
						</div>
					)}
				</div>
			</section>
		</Meta>
	);
};

export default Favorites;
