import { capitalizeFirstLetter } from './string';

export const getCurrentYear = () => new Date().getFullYear();

export const getCurrentMonth = (language: 'ru' | 'en') => {
	if (language === 'ru')
		return capitalizeFirstLetter(
			new Date().toLocaleString('ru-RU', { month: 'long' }),
		);
	if (language === 'en')
		return new Date().toLocaleString('en-US', { month: 'long' });
};

export const convertSqlDate = (date: string) => {
	return new Date(date).toLocaleDateString('ru');
};

export const convertToTime = (ms: number) => {
	return new Date(ms).toLocaleTimeString('ru-RU', {
		timeStyle: 'short',
	});
};
