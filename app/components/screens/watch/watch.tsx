import { FC, useEffect } from 'react';

import { IMovie } from '@/shared/types/movie.types';

import Chat from './chat/chat';
import styles from './watch.module.scss';

interface IWatch {
	movie: IMovie;
}

const Watch: FC<IWatch> = ({ movie }) => {
	useEffect(() => {
		const script = document.createElement('script');
		script.src = '/player.js';
		document.body.appendChild(script);

		return () => {
			script.remove();
		};
	}, []);

	return (
		<div className={styles.watch}>
			<div className={styles.videoContainer}>
				<div
					className={styles.video}
					id="kinobd"
					data-resize="1"
					data-bg="#000"
					data-kinopoisk={movie.kinopoiskId}
				/>
			</div>
			<Chat />
		</div>
	);
};

export default Watch;
