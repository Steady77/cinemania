import { FC } from 'react';

interface IHeader {
	title: string;
	className?: string;
}

const Header: FC<IHeader> = ({ title, className }) => {
	return (
		<h1
			className={`text-white text-opacity-80 font-semibold ${
				className?.includes('xl') ? '' : 'text-3xl'
			} ${className}`}
		>
			{title}
		</h1>
	);
};
export default Header;
