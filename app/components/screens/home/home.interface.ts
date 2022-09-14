import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

import { IFilmByFilters, IReleaseMovie } from '@/shared/types/movie.type';

export interface IHome {
  slides: ISlide[];
  tvSeries: IGalleryItem[];
  releases: IGalleryItem[];
}
