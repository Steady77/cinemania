import { IPremieresMovie } from '@/shared/types/movie.type';

export interface ISlide
  extends Pick<IPremieresMovie, 'kinopoiskId' | 'posterUrl' | 'nameRu'> {
  subTitle: string;
  link: string;
}
