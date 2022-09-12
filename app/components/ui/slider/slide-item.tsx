import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';

import { ISlide } from './slider.interface';
import styles from './slider.module.scss';

interface ISlideItem {
  slide: ISlide;
  buttonTitle?: string;
}

const SlideItem: FC<ISlideItem> = ({ slide, buttonTitle = 'Смотреть' }) => {
  const { push } = useRouter();

  return (
    <div className={styles.slide}>
      {slide.posterUrl && (
        <Image
          layout="fill"
          className={styles.image}
          src={slide.posterUrl}
          alt={slide.nameRu}
          draggable={false}
          unoptimized
          priority
        />
      )}
      <div className={styles.content}>
        <h5 className={styles.heading}>{slide.nameRu}</h5>
        <div className={styles.subHeading}>{slide.subTitle}</div>
        <button
          className={styles.button}
          onClick={() => push(slide.link)}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};
export default SlideItem;
