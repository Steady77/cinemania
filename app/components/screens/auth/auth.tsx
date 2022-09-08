import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toastr } from 'react-redux-toastr';

import Button from '@/components/ui/form-elements/button';
import Header from '@/components/ui/header/header';

import { USER } from '@/utils/consts';
import Meta from '@/utils/meta/meta';
import { saveToLS } from '@/utils/storage';

import { IUserCred } from '@/store/auth/auth.interface';
import { setAuthData } from '@/store/auth/auth.slice';

import AuthInputs from './auth-inputs';
import { IAuthInput } from './auth.interface';
import styles from './auth.module.scss';
import { useAuthRedirect } from './use-auth-redirect.hook';

const Auth: FC = () => {
  const dispatch = useDispatch();
  useAuthRedirect();

  const [type, setType] = useState<'login' | 'register'>('login');

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  });

  const login = (data: IUserCred) => {
    toastr.success('Вход', 'Успешный вход');
    dispatch(setAuthData(data));
    saveToLS(USER, data);
    console.table(data);
  };
  const register = (data: IUserCred) => {
    toastr.success('Регистрация', 'Успешная регистрация');
    dispatch(setAuthData(data));
    saveToLS(USER, data);
  };

  const onSubmit: SubmitHandler<IAuthInput> = (data) => {
    if (type === 'login') login(data);
    else if (type === 'register') register(data);

    reset();
  };

  return (
    <Meta title="Авторизация">
      <section className={styles.wrapper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Header
            title="Авторизация"
            className="mb-6"
          />
          <AuthInputs
            formState={formState}
            register={registerInput}
            isPasswordRequired
          />
          <div className={styles.buttons}>
            <Button
              type="submit"
              onClick={() => setType('login')}
            >
              Войти
            </Button>
            <Button
              type="submit"
              onClick={() => setType('register')}
            >
              Регистрация
            </Button>
          </div>
        </form>
      </section>
    </Meta>
  );
};
export default Auth;
