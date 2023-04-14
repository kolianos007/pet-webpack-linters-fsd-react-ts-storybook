import '@/pages/login/styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { LoginFormValues } from '@/pages/login/Login.types';
import { AuthSchema } from '@/shared/schemas/index';
import Button from '@/shared/ui/button';
import CenteredBlock from '@/shared/ui/centeredBlock';
import Form from '@/shared/ui/form';
import Input from '@/shared/ui/input';
import RouterLink from '@/shared/ui/routerLink';

const Login: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(AuthSchema),
  });
  const [errorLogin, setErrorLogin] = useState('');

  const onSubmit = (data: LoginFormValues) => {
    const localStorageValue = localStorage.getItem('registrationData');
    const isRegistered = localStorageValue && JSON.parse(localStorageValue).username === data.username;
    if (isRegistered) {
      localStorage.setItem('loginData', JSON.stringify(data));
      navigate('/');
    } else {
      setErrorLogin('No user with this name and password');
    }

    // eslint-disable-next-line no-console
    console.log('Login data:', data);
  };

  // eslint-disable-next-line no-console
  console.log(watch('username'));

  return (
    <CenteredBlock>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Login:" {...register('username')} error={errors.username?.message} />
        <Input label="Password:" type="password" {...register('password')} error={errors.password?.message} />
        <Button type="submit" className="btn-submit">
          Login
        </Button>
        {errorLogin && <span className="error">{errorLogin}</span>}
        <RouterLink to="/registration" className="centeredLink">
          Go to Registration
        </RouterLink>
      </Form>
    </CenteredBlock>
  );
};

export default Login;
