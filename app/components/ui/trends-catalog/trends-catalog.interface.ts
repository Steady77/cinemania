import { ITopMovie } from '@/shared/types/movie.types';

export interface ITrendsCatalog {
	title: string;
	description: string;
	movies: ITopMovie[];
	pagesCount: number;
}
