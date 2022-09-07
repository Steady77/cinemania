import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/ui/form-elements/button';
import Header from '@/components/ui/header/header';

import { useAuth } from '@/hooks/use-auth.hook';

import Meta from '@/utils/meta/meta';

import AuthInputs from './auth-inputs';
import { IAuthInput } from './auth.interface';
import styles from './auth.module.scss';
import { useAuthRedirect } from './use-auth-redirect.hook';

const Auth: FC = () => {
  useAuthRedirect();

  const { isLoading } = useAuth();

  const [type, setType] = useState<'login' | 'register'>('login');

  const {
    register: registerInput,
    handleSubmit,
    formState,
    reset,
  } = useForm<IAuthInput>({
    mode: 'onChange',
  });

  const login = (data: any) => {
    console.log(data);
  };
  const register = (data: any) => {
    console.log(data);
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
              disabled={isLoading}
            >
              Войти
            </Button>
            <Button
              type="submit"
              onClick={() => setType('register')}
              disabled={isLoading}
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
