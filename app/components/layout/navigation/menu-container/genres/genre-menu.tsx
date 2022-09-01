import { FC } from 'react';

import ContentLoader from '@/components/ui/content-loader';

import Menu from '../menu';

import { useGenres } from './useGenres';

const GenreMenu: FC = () => {
  const { isLoading, data } = useGenres();

  return isLoading ? (
    <div className="mx-11 mb-6">
      <ContentLoader
        count={5}
        className="h-7 mt-6"
      />
    </div>
  ) : (
    <Menu menu={{ title: 'Случайные жанры', items: data || [] }} />
  );
};
export default GenreMenu;
