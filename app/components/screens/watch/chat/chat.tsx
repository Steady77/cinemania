import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';

import Input from '@/components/ui/form-elements/input';

import styles from './chat.module.scss';
import Message from './message/message';
import { IMessage } from './message/message.type';

const Chat: FC = () => {
	const [message, setMessage] = useState<string>('');
	const [messages, setMessages] = useState<IMessage[]>([]);
	const ref = useRef<HTMLDivElement>(null);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setMessage(e.target.value);
	};

	const sendMessage = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newMessage: IMessage = {
			name: 'Name',
			text: message,
			createdAt: Date.now(),
		};

		if (message.trim()) {
			setMessages([...messages, newMessage]);
			setMessage('');
		}
	};

	useEffect(() => {
		ref.current?.scrollTo(0, ref.current.scrollHeight);
	}, [messages]);

	return (
		<div className={styles.container}>
			<div
				ref={ref}
				className={styles.content}
			>
				{messages.length ? (
					messages.map((item) => (
						<Message
							key={item.createdAt}
							item={item}
						/>
					))
				) : (
					<span className={styles.noMessages}>Нет сообщений</span>
				)}
			</div>
			<form
				onSubmit={sendMessage}
				className={styles.form}
				action="#"
			>
				<Input
					placeholder="Введите сообщение"
					style={{ marginBottom: 0 }}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default Chat;
