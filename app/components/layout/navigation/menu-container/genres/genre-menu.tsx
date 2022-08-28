import { FC } from 'react';

import Menu from '../menu';

import { useGenres } from './useGenres';

const GenreMenu: FC = () => {
  const { isLoading, data } = useGenres();

  return isLoading ? (
    <div className="mx-11 mb-6">Loading ...</div>
  ) : (
    <Menu menu={{ title: 'Популярные жанры', items: data || [] }} />
  );
};
export default GenreMenu;
