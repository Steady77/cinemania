import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';
import { IHome } from '@/components/screens/home/home.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/movie/get-string-of-genres';

import { getMovieRoute } from '@/config/url.config';

const HomePage: NextPage<IHome> = ({ slides }) => {
  return <Home slides={slides} />;
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await MovieService.getPremieresMovies();

    const slides: ISlide[] = data.items.map((movie) => ({
      kinopoiskId: movie.kinopoiskId,
      posterUrl: movie.posterUrl,
      link: getMovieRoute(movie.kinopoiskId),
      subTitle: getGenresList(movie.genres),
      nameRu: movie.nameRu,
    }));

    return {
      props: {
        slides,
      } as IHome,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
      },
    };
  }
};

export default HomePage;
