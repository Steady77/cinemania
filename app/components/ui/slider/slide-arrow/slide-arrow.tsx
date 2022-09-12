import cn from 'classnames';
import { FC } from 'react';

import MaterialIcon from '../../material-icon';

import styles from './slide-arrow.module.scss';

interface ISlideArrow {
  variant: 'left' | 'right';
  handleArrowClick: () => void;
}

const SlideArrow: FC<ISlideArrow> = ({ handleArrowClick, variant }) => {
  const isLeft = variant === 'left';

  return (
    <button
      onClick={handleArrowClick}
      className={cn(styles.arrow, {
        [styles.left]: isLeft,
        [styles.right]: !isLeft,
      })}
    >
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  );
};

export default SlideArrow;
