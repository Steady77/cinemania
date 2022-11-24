import { IStaff } from '@/shared/types/staff.types';

export const getArrayOfUnique = <T>(
	array: T[],
	property: 'staffId' | 'filmId',
): T[] => {
	const uniqueIds: number[] = [];

	const arrayOfUniques = array.filter((obj: any) => {
		const isDuplicate = uniqueIds.includes(obj[property]);

		if (!isDuplicate) {
			uniqueIds.push(obj[property]);

			return true;
		}

		return false;
	});

	return arrayOfUniques;
};
