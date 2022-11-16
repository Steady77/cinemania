import { IReleaseMovie } from '@/shared/types/movie.types';

export interface IFreshCatalog {
	title: string;
	description: string;
	movies: IReleaseMovie[];
	total: number;
}
