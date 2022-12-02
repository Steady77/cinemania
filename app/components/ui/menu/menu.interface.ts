import { MaterialIconNameType } from '@/shared/types/icon.types';

export interface IMenuItem {
	icon?: MaterialIconNameType;
	title?: string;
	link: string;
}

export interface IMenu {
	title: string;
	items: IMenuItem[];
}
