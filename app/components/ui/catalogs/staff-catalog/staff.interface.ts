export interface IStaffItem {
	posterPath: string;
	name: string;
	link: string;
	text?: string;
}

export interface IStaffItemProps {
	person: IStaffItem;
}
