import { DefaultEventsMap } from '@socket.io/component-emitter';
import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';

import { SERVER_URL } from '@/config/api.config';

import { IMessage } from './message/message.type';

export const useChat = (roomId: string) => {
	const [messages, setMessages] = useState<IMessage[]>([]);
	const [socket, setSocket] = useState<Socket<
		DefaultEventsMap,
		DefaultEventsMap
	> | null>(null);

	useEffect(() => {
		if (!roomId) return;

		const socket = io(SERVER_URL, {
			query: { roomId },
		});

		setSocket(socket);

		return () => {
			socket.close();
		};
	}, [roomId]);

	useEffect(() => {
		if (!socket) return;

		socket.on('get_message', (message) => {
			setMessages((prev) => [...prev, message]);
		});

		return () => {
			socket.close();
		};
	}, [socket]);

	const sendMessage = (message: IMessage) => {
		socket?.emit('send_message', message);
	};

	return { messages, sendMessage };
};
