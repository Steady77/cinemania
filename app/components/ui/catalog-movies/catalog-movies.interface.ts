import { IReleasesResp } from '@/shared/types/movie.type';

export interface ICatalog {
	title: string;
	description: string;
	data: IReleasesResp;
}
