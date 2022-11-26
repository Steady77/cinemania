import { FC } from 'react';
import { FormState, UseFormRegister } from 'react-hook-form';

import Input from '@/components/ui/form-elements/input';

import { validEmail } from '@/shared/regex';

import { IAuthInput } from './auth.interface';

interface IAuthInputs {
	register: UseFormRegister<any>;
	formState: FormState<IAuthInput>;
	isPasswordRequired?: boolean;
}

const AuthInputs: FC<IAuthInputs> = ({
	formState: { errors },
	isPasswordRequired = false,
	register,
}) => {
	return (
		<>
			<Input
				{...register('email', {
					required: 'Введите почту',
					pattern: {
						value: validEmail,
						message: 'Введите корректный адрес почты',
					},
				})}
				placeholder="Почта"
				error={errors.email}
			/>
			<Input
				{...register(
					'password',
					isPasswordRequired
						? {
								required: 'Введите пароль',
								minLength: {
									value: 6,
									message: 'Введите более 6 символов',
								},
						  }
						: {},
				)}
				placeholder="Пароль"
				type={'password'}
				error={errors.password}
			/>
		</>
	);
};
export default AuthInputs;
