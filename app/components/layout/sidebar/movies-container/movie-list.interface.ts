import { ITopMovie } from './../../../../shared/types/movie.type';

export interface IMovieList {
	title: string;
	link: string;
	movies: ITopMovie[];
}
