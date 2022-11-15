import { FC } from 'react';
import { MouseEvent } from 'react';
import * as MaterialIcons from 'react-icons/md';

import { useRenderClient } from '@/hooks/use-render-client.hook';

import { MaterialIconNameType } from '@/shared/types/icon.types';

interface IMaterialIcon {
	name: MaterialIconNameType;
	onClick?: (e: MouseEvent<SVGElement>) => void;
	className?: string;
}

const MaterialIcon: FC<IMaterialIcon> = ({ name, onClick, className }) => {
	const { isRenderClient } = useRenderClient();

	const IconComponent = MaterialIcons[name];

	if (isRenderClient)
		return (
			(
				<IconComponent
					className={className}
					onClick={onClick}
				/>
			) || <MaterialIcons.MdAccessibleForward />
		);
	else return null;
};

export default MaterialIcon;
