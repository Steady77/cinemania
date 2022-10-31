import { ITopMovie } from '@/shared/types/movie.type';

export interface ITrendsCatalog {
	title: string;
	description: string;
	movies: ITopMovie[];
	pagesCount: number;
}
