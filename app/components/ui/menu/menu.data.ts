import { IMenu } from './menu.interface';

export const firstMenu: IMenu = {
	title: 'Меню',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Главная',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Открытие',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Новинки',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trends',
			title: 'В тренде',
		},
	],
};

export const userMenu: IMenu = {
	title: 'Прочее',
	items: [],
};
