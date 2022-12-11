import Favorites from '@/components/screens/favorites/favorites';

import { AuthNextPage } from '@/shared/types/auth.types';

const FavoritesPage: AuthNextPage = () => {
	return <Favorites />;
};

FavoritesPage.isUserPage = true;

export default FavoritesPage;
