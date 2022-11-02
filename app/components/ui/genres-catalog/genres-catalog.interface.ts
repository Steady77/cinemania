import { IFilmByFilters } from '@/shared/types/movie.type';

export interface IGenresCatalog {
	title: string;
	description: string;
	movies: IFilmByFilters[];
	pagesCount: number;
}
