export const convertAge = (str: string): string => {
	switch (str) {
		case 'age6':
			return '6+';
		case 'age12':
			return '12+';
		case 'age16':
			return '16+';
		case 'age18':
			return '18+';
		default:
			return '';
	}
};
