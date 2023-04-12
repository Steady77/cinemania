import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';

import Avatar from '@/components/ui/avatar/avatar';
import ContentLoader from '@/components/ui/content-loader';
import Button from '@/components/ui/form-elements/button';
import UploadFile from '@/components/ui/form-elements/upload-file/upload-file';
import Gallery from '@/components/ui/gallery/gallery';
import Heading from '@/components/ui/heading/heading';
import SubHeading from '@/components/ui/heading/sub-heading';

import Meta from '@/utils/meta/meta';

import AuthInputs from '../auth/auth-inputs';

import { IProfileInput } from './profile.interface';
import styles from './profile.module.scss';
import Statistic from './statistic';
import { useProfile } from './use-profile.hook';
import { useWatchHistory } from './use-watch-history';

const Profile: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IProfileInput>({
			mode: 'onChange',
		});

	const { isLoading, onSubmit, handleDelete } = useProfile(setValue);

	const { data, movies } = useWatchHistory();

	return (
		<Meta title="Профиль">
			<section>
				<Heading
					title="Профиль"
					className="my-6"
				/>
				<div className={styles.profile}>
					<Controller
						name="avatar"
						control={control}
						render={({ field: { value } }) => (
							<Avatar
								img={value}
								size="big"
								className="mb-7"
							/>
						)}
					/>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={styles.form}
					>
						<Controller
							name="avatar"
							control={control}
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error },
							}) => (
								<UploadFile
									placeholder="Поменять аватар"
									error={error}
									image={value}
									onChange={onChange}
								/>
							)}
						/>
						{isLoading ? (
							<ContentLoader count={2} />
						) : (
							<AuthInputs
								formState={formState}
								register={register}
							/>
						)}
						<Button>Обновить</Button>
					</form>
					<Button
						className={styles.delete}
						onClick={() => confirm('Профиль будет удален') && handleDelete()}
					>
						Удалить
					</Button>
				</div>

				<div className="my-10">
					<SubHeading title="Недавние просмотры" />
					<Gallery items={movies} />
				</div>

				<Statistic totalWatch={data?.totalWatched || 0} />
			</section>
		</Meta>
	);
};

export default Profile;
