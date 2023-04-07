import './styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { LoginFormValues } from '@/pages/login/Login.types';
import { AuthSchema } from '@/shared/schemas/index';
import Button from '@/shared/ui/button';
import Form from '@/shared/ui/form';
import Input from '@/shared/ui/input';
import CenteredBlock from '@/shared/ui/centeredBlock';

const Login: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: yupResolver(AuthSchema),
  });

  const onSubmit = (data: LoginFormValues) => {
    localStorage.setItem('loginData', JSON.stringify(data));
    console.log('Login data:', data);
  };

  return (
    <CenteredBlock>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input name="login" label="Login:" register={register('username')} error={errors.username?.message} />
        <Input
          name="password"
          label="Password:"
          type="password"
          register={register('password')}
          error={errors.password?.message}
        />
        <Button type="submit" className="btn-submit">
          Login
        </Button>
      </Form>
    </CenteredBlock>
  );
};

export default Login;
