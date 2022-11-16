import { IStaff } from '@/shared/types/staff.types';

export const getArrayOfUnique = (array: IStaff[]) => {
	const uniqueIds: number[] = [];

	const arrayOfUniques = array.filter((obj) => {
		const isDuplicate = uniqueIds.includes(obj.staffId);

		if (!isDuplicate) {
			uniqueIds.push(obj.staffId);

			return true;
		}

		return false;
	});

	return arrayOfUniques;
};
