import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconNameType } from '@/shared/types/icon.types';

const MaterialIcon: FC<{ name: MaterialIconNameType }> = ({ name }) => {
  const IconComponent = MaterialIcons[name];

  return <IconComponent /> || <MaterialIcons.MdAccessibleForward />;
};

export default MaterialIcon;
