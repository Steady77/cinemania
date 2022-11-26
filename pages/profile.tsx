import Profile from '@/components/screens/profile/profile';

import { AuthNextPage } from '@/shared/types/auth.types';

const ProfilePage: AuthNextPage = () => {
	return <Profile />;
};

ProfilePage.isUserPage = true;

export default ProfilePage;
