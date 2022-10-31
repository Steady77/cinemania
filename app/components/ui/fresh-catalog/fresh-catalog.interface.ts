import { IReleaseMovie } from '@/shared/types/movie.type';

export interface IFreshCatalog {
	title: string;
	description: string;
	movies: IReleaseMovie[];
	total: number;
}
