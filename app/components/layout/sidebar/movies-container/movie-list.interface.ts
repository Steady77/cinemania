import { IMovie } from '@/shared/types/movie.type';

import { IFilm } from './../../../../shared/types/movie.type';

export interface IMovieList {
  title: string;
  link: string;
  movies: IFilm[];
}
