import { FC } from 'react';

import { convertToTime } from '@/utils/date';

import styles from './message.module.scss';
import { IMessage } from './message.type';

const Message: FC<{ item: IMessage }> = ({ item }) => {
	return (
		<div className={styles.message}>
			<div className={styles.top}>
				<span className={styles.name}>{item.name}</span>
				<span className={styles.time}>{convertToTime(item.createdAt)}</span>
			</div>
			<p className={styles.text}>{item.text}</p>
		</div>
	);
};

export default Message;
