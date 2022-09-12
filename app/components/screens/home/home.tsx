import { FC } from 'react';

import Header from '@/components/ui/header/header';
import Slider from '@/components/ui/slider/slider';

import Meta from '@/utils/meta/meta';

import { IHome } from './home.interface';

const Home: FC<IHome> = ({ slides }) => {
  return (
    <Meta
      title="Онлайн кинотеатр"
      description="Описание"
    >
      <Header
        title="Кинопремьеры"
        className="text-blue-300 mb-8 text-xl"
      />
      {slides.length && <Slider slides={slides} />}
    </Meta>
  );
};

export default Home;
