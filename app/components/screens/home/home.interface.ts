import { IGalleryItem } from '@/components/ui/gallery/gallery.interface';
import { IList } from '@/components/ui/list/list.interface';
import { ISlide } from '@/components/ui/slider/slider.interface';

export interface IHome {
	genres: IList[];
	slides: ISlide[];
	tvSeries: IGalleryItem[];
	releases: IGalleryItem[];
}
