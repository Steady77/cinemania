import type { GetStaticProps, NextPage } from 'next';

import Home from '@/components/screens/home/home';
import { IHome } from '@/components/screens/home/home.interface';
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { MovieService } from '@/services/movie.service';

import { getGenresList } from '@/utils/movie/get-string-of-genres';

import { getMovieRoute } from '@/config/url.config';

const HomePage: NextPage<IHome> = ({ slides, releases, tvSeries }) => {
  return (
    <Home
      slides={slides}
      releases={releases}
      tvSeries={tvSeries}
    />
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: premieres } = await MovieService.getPremieresMovies();

    const slides: ISlide[] = premieres.items.map((movie) => ({
      kinopoiskId: movie.kinopoiskId,
      posterUrl: movie.posterUrl,
      link: getMovieRoute(movie.kinopoiskId),
      subTitle: getGenresList(movie.genres),
      nameRu: movie.nameRu,
    }));

    const { data: releasesData } = await MovieService.getReleasesMovies();

    const releases: IGalleryItem[] = releasesData.releases.map((movie) => ({
      name: movie.nameRu,
      link: getMovieRoute(movie.filmId),
      posterPath: movie.posterUrlPreview,
      content: {
        title: movie.nameRu,
        subTitle: movie.releaseDate,
      },
    }));

    const { data: tvSeriesData } = await MovieService.getTvSeries();

    const tvSeries: IGalleryItem[] = tvSeriesData.items.map((movie) => ({
      name: movie.nameRu,
      link: getMovieRoute(movie.kinopoiskId),
      posterPath: movie.posterUrlPreview,
      content: {
        title: movie.nameRu,
        subTitle: movie.ratingKinopoisk,
      },
    }));

    return {
      props: {
        slides,
        releases,
        tvSeries,
      } as IHome,
    };
  } catch (error) {
    return {
      props: {
        slides: [],
        releases: [],
        tvSeries: [],
      },
    };
  }
};

export default HomePage;
