import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';

import { UserService } from '@/services/user.service';

export const useUpdateWatchHistory = (filmId: string) => {
	const { mutateAsync } = useMutation(['update watch history'], () =>
		UserService.setWatchedHistory(filmId),
	);

	useEffect(() => {
		mutateAsync();
	}, []);
};
