import { axiosAPI } from 'api/interceptors';

import { IPopularMovies, ISearchMovies } from '@/shared/types/movie.type';

import { getMoviesUrl } from '@/config/api.config';

export const MovieService = {
  async getSearchedMovies(keyword?: string) {
    return axiosAPI.get<ISearchMovies>(getMoviesUrl(''), {
      params: keyword ? { keyword } : {},
    });
  },

  async getPopularMovies(type = 'TOP_100_POPULAR_FILMS', page = 1) {
    return axiosAPI.get<IPopularMovies>(getMoviesUrl('/top'), {
      params: { type, page },
    });
  },
};