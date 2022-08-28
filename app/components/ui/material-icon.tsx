import { FC } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { MaterialIconNameType } from '@/shared/types/icon-types';

const MaterialIcon: FC<{ name: MaterialIconNameType }> = ({ name }) => {
  const IconCompoonent = MaterialIcons[name];

  return <IconCompoonent /> || <MaterialIcons.MdAccessibleForward />;
};
export default MaterialIcon;
