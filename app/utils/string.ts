export const convertSqlRole = (isAdmin: boolean) => {
	return isAdmin ? 'Администратор' : 'Пользователь';
};

export const formatAge = (value: number): string => {
	const formatter = new Intl.NumberFormat('ru', {
		style: 'unit',
		unit: 'year',
		unitDisplay: 'long',
	});

	return formatter.format(value);
};

export const clearText = (
	_string: string,
	limit: null | number = null,
): string => {
	let result = _string
		.replace(/<[^>]+>/g, '')
		.replace(/&[^;]+./g, ' ')
		.replace(
			/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
			'',
		);

	if (limit) result = result.slice(0, limit) + '...';

	return result;
};

export const capitalizeFirstLetter = (str: string) => {
	if (str) {
		return str[0].toUpperCase() + str.substring(1).toLowerCase();
	}
	return 'Not found';
};
