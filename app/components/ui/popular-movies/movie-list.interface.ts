import { ITopMovie } from '@/shared/types/movie.types';

export interface IMovieList {
	link: string;
	movies: ITopMovie[];
}
