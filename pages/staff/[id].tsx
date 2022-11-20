import { GetServerSideProps, NextPage } from 'next';

import Person from '@/components/screens/person/person';

import { IPerson } from '@/shared/types/staff.types';

import { StaffService } from '@/services/staff.service';

import Error404 from '../404';

interface IStaffPage {
	person: IPerson;
}

const StaffPage: NextPage<IStaffPage> = ({ person }) => {
	return person ? <Person person={person} /> : <Error404 />;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
	const id = params?.id as string;

	try {
		const { data: person } = await StaffService.getPerson(id);

		return {
			props: {
				person,
			},
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
};

export default StaffPage;
