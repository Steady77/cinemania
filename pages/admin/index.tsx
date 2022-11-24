import Admin from '@/components/screens/admin/admin';

import { AuthNextPage } from '@/shared/types/auth.types';

const AdminPage: AuthNextPage = () => {
	return <Admin />;
};

AdminPage.isAdminPage = true;

export default AdminPage;
