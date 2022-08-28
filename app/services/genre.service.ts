import { getGenresUrl } from '@/config/api.config';

import { axiosAPI } from './../api/interceptors';
import { IGenres } from './../shared/types/movie.type';

export const GenreService = {
  async getGenres() {
    return axiosAPI.get<IGenres>(getGenresUrl());
  },
};
