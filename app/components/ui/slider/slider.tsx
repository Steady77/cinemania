import { FC } from 'react';
import { CSSTransition } from 'react-transition-group';

import SlideArrow from './slide-arrow/slide-arrow';
import SlideItem from './slide-item';
import { ISlide } from './slider.interface';
import styles from './slider.module.scss';
import { useSlider } from './use-slider.hook';

interface ISlider {
  slides: ISlide[];
  buttonTitle?: string;
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {
  const { currentIdx, handleArrowClick, isExistsNext, isExistsPrev, slideIn } =
    useSlider(slides.length);

  return (
    <div className={styles.slider}>
      <CSSTransition
        in={slideIn}
        classNames="slide-animation"
        timeout={300}
        unmountOnExit
      >
        <SlideItem
          slide={slides[currentIdx]}
          buttonTitle={buttonTitle}
        />
      </CSSTransition>

      {isExistsPrev && (
        <SlideArrow
          variant="left"
          handleArrowClick={() => handleArrowClick('prev')}
        />
      )}
      {isExistsNext && (
        <SlideArrow
          variant="right"
          handleArrowClick={() => handleArrowClick('next')}
        />
      )}
    </div>
  );
};
export default Slider;
