import { FC } from 'react';

import Header from '@/components/ui/header/header';

import Meta from '@/utils/meta/meta';

const Home: FC = () => {
  return (
    <Meta
      title="Онлайн кинотеатр"
      description="Описание"
    >
      <Header
        title="Смотреть фильмы онлайн"
        className="text-blue-300 mb-8 text-xl"
      />
    </Meta>
  );
};

export default Home;
