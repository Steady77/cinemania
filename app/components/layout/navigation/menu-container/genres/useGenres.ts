import { useQuery } from 'react-query';

import { GenreService } from '@/services/genre.service';

import { capitalizeFirstLetter } from '@/utils/helpers';

import { getGenreUrl } from '@/config/url.config';

import { IMenuItem } from './../menu.interface';

export const useGenres = () => {
  const queryData = useQuery('genres menu', () => GenreService.getGenres(), {
    select: ({ data: { genres } }) =>
      genres
        .map(
          ({ genre, id }) =>
            ({
              title: genre,
              link: getGenreUrl(id),
              icon: 'MdThumbUp',
            } as IMenuItem),
        )
        .sort(() => Math.random() - 0.5)
        .splice(0, 4)
        .map((item) => ({
          ...item,
          title: capitalizeFirstLetter(item.title),
        })),
  });

  return queryData;
};
