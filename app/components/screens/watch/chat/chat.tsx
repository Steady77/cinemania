import { useRouter } from 'next/router';
import { ChangeEvent, FC, FormEvent, useEffect, useRef, useState } from 'react';

import Input from '@/components/ui/form-elements/input';

import { useAuth } from '@/hooks/use-auth.hook';

import styles from './chat.module.scss';
import Message from './message/message';
import { IMessage } from './message/message.type';
import { useChat } from './use-chat.hook';

const Chat: FC = () => {
	const { query } = useRouter();
	const roomId = query?.id as string;

	const [inputValue, setInputValue] = useState('');
	const ref = useRef<HTMLDivElement>(null);

	const { messages, sendMessage } = useChat(roomId);
	const { user } = useAuth();

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const submitHandler = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newMessage: IMessage = {
			name: user?.email,
			text: inputValue,
			createdAt: Date.now(),
		};

		if (inputValue.trim()) {
			sendMessage(newMessage);
			setInputValue('');
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
				onSubmit={submitHandler}
				className={styles.form}
				action="#"
			>
				<Input
					value={inputValue}
					placeholder="Введите сообщение"
					style={{ marginBottom: 0 }}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
};

export default Chat;
