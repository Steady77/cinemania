import { IFilmByFilters } from '@/shared/types/movie.type';

export interface ICatalog {
	title: string;
	description: string;
	movies: IFilmByFilters[];
}
