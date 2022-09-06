import HeadProgressBar from 'nextjs-progressbar';
import { FC, PropsWithChildren } from 'react';

import { accentColor } from '@/utils/consts';

const HeadProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <HeadProgressBar
        color={accentColor}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      {children}
    </>
  );
};
export default HeadProvider;
