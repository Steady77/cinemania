import cn from 'classnames';
import { FC } from 'react';

const Description: FC<{ text: string; className?: string }> = ({
	text,
	className,
}) => {
	return (
		<div
			className={cn('text-lg font-light text-white text-opacity-60', className)}
		>
			<p>{text}</p>
		</div>
	);
};
export default Description;
