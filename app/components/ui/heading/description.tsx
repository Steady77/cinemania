import cn from 'classnames';
import { FC } from 'react';

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className,
}) => {
	return (
		<p
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			{text}
		</p>
	);
};
export default Description;
