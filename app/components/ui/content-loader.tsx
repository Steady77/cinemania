import cn from 'classnames';
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ContentLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <Skeleton
      {...rest}
      baseColor="#1f2135"
      highlightColor="#292a3e"
      className={cn('rounded-lg', className)}
    />
  );
};
export default ContentLoader;
