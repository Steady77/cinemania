import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/hooks/use-render-client.hook';

import { MaterialIconNameType } from '@/shared/types/icon.types';

const MaterialIcon: FC<{ name: MaterialIconNameType }> = ({ name }) => {
  const { isRenderClient } = useRenderClient();
  const IconComponent = MaterialIcons[name];

  if (isRenderClient)
    return <IconComponent /> || <MaterialIcons.MdAccessibleForward />;
  else return null;
};

export default MaterialIcon;
