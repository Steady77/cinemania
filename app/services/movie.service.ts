import { axiosAPI } from 'api/interceptors';

import { ISearchMovies } from '@/shared/types/movie.type';

import { getMoviesUrl } from '@/config/api.config';

export const MovieService = {
  async getMovies(searchValue?: string) {
    return axiosAPI.get<ISearchMovies>(getMoviesUrl(), {
      params: searchValue ? { keyword: searchValue } : {},
    });
  },
};
