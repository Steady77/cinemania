import { useMutation } from '@tanstack/react-query';
import cn from 'classnames';
import { FC, useEffect, useState } from 'react';
import { toastr } from 'react-redux-toastr';

import { useFavorites } from '@/components/screens/favorites/use-favorites.hook';

import { useAuth } from '@/hooks/use-auth.hook';

import { UserService } from '@/services/user.service';

import { toastError } from '@/utils/toast-error';

import styles from './favorite-button.module.scss';
import HeartImage from './heart-anim.png';

const FavoriteButton: FC<{ filmId: string }> = ({ filmId }) => {
	const [isPressed, setIsPressed] = useState(false);
	const { user } = useAuth();

	const { favoritesIds, refetch } = useFavorites();

	useEffect(() => {
		if (!favoritesIds) return;

		const isExist = favoritesIds.includes(filmId);

		if (isPressed !== isExist) setIsPressed(isExist);
	}, [filmId, isPressed, favoritesIds]);

	const { mutateAsync } = useMutation(
		['update favorites'],
		() => UserService.toggleFavorites(filmId),
		{
			onError: (error) => {
				toastError(error, 'Обновление избранного');
			},
			onSuccess: () => {
				setIsPressed(!isPressed);
				refetch();
			},
		},
	);

	const addToFavorite = () => {
		if (!user) {
			toastr.info(
				'Добавление в избранное',
				'Необходимо зарегистрироваться или войти в аккаунт',
			);
		} else {
			mutateAsync();
		}
	};

	return (
		<button
			onClick={addToFavorite}
			className={cn(styles.button, {
				[styles.animate]: isPressed,
			})}
			style={{ backgroundImage: `url(${HeartImage.src})` }}
		></button>
	);
};

export default FavoriteButton;
