import cn from 'classnames';
import Image from 'next/image';
import { FC } from 'react';

import defaultAvatar from '@/assets/images/default-avatar.png';

import ContentLoader from '../../content-loader';
import { IUploadFile } from '../form.interface';
import styles from '../form.module.scss';

import { useUpload } from './use-upload.hook';

const UploadFile: FC<IUploadFile> = ({
	onChange,
	placeholder,
	style,
	error,
	image,
}) => {
	const { isLoading, uploadImage } = useUpload(onChange);

	return (
		<div
			className={cn(styles.field, styles.uploadField)}
			style={style}
		>
			<div className={styles.uploadFlex}>
				<label>
					<span>{placeholder}</span>
					<input
						type="file"
						onChange={uploadImage}
						accept="image/*,.jpg"
					/>
					{error && <div className={styles.error}>{error.message}</div>}
				</label>
				<div className={styles.uploadImageContainer}>
					{isLoading ? (
						<ContentLoader
							count={1}
							className="w-full h-full"
						/>
					) : (
						<Image
							src={image || defaultAvatar}
							alt=""
							layout="fill"
							unoptimized
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default UploadFile;
