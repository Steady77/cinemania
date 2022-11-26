import Image from 'next/image';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import ContentLoader from '@/components/ui/content-loader';
import Button from '@/components/ui/form-elements/button';
import Heading from '@/components/ui/heading/heading';

import Meta from '@/utils/meta/meta';

import { SERVER_URL } from '@/config/api.config';

import AuthInputs from '../auth/auth-inputs';

import { IProfileInput } from './profile.interface';
import styles from './profile.module.scss';
import { useProfile } from './use-profile.hook';

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue } =
		useForm<IProfileInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit, data } = useProfile(setValue);

	const avatarUrl = SERVER_URL + data?.data.avatar;

	return (
		<Meta title="Профиль">
			<Heading
				title="Профиль"
				className="my-6"
			/>
			<div className={styles.profile}>
				<div className={styles.avatar}>
					<Image
						width={150}
						height={150}
						src={avatarUrl}
						alt="avatar"
					/>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className={styles.form}
				>
					{isLoading ? (
						<ContentLoader count={2} />
					) : (
						<AuthInputs
							formState={formState}
							register={register}
						/>
					)}
				</form>
				<Button>Обновить</Button>
			</div>
		</Meta>
	);
};

export default Profile;
