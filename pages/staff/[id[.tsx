import { NextPage } from 'next';

import StaffCatalog from '@/components/ui/staff-catalog/staff-catalog';
import { IStaffItem } from '@/components/ui/staff-catalog/staff.interface';

interface IStaffPage {
	persons: IStaffItem[];
}

export const StaffPage: NextPage<IStaffPage> = ({ persons }) => {
	return <StaffCatalog persons={persons} />;
};
