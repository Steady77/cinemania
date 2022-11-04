export interface IGalleryItem {
	posterPath: string;
	name: string;
	link: string;
	content?: {
		title?: number | string;
		subTitle?: string | number;
	};
}

export interface IGalleryItemProps {
	item: IGalleryItem;
	variant: 'vertical' | 'horizontal';
}
