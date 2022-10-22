import {
	IMovie,
	IReleaseMovie,
	MergeTwoTypes,
} from '@/shared/types/movie.type';

export interface ICatalog {
	title: string;
	description: string;
	movies: MergeTwoTypes<IMovie, IReleaseMovie>[];
}
