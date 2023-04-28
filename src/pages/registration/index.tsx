import '@/pages/registration/styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { RegistrationFormValues } from '@/pages/registration/index.types';
import { AuthSchema } from '@/shared/schemas';
import Button from '@/shared/ui/button';
import CenteredBlock from '@/shared/ui/centeredBlock';
import Form from '@/shared/ui/form';
import Input from '@/shared/ui/input';
import RouterLink from '@/shared/ui/routerLink';

const Registration: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(AuthSchema),
  });

  const onSubmit = (data: RegistrationFormValues) => {
    localStorage.setItem('registrationData', JSON.stringify(data));
    localStorage.setItem('loginData', JSON.stringify(data));
    navigate('/');
  };

  return (
    <CenteredBlock>
      <Form onSubmit={handleSubmit(onSubmit)} className="registrationForm">
        <Input label="Login:" {...register('username')} error={errors.username?.message} />
        <Input label="Password:" type="password" {...register('password')} error={errors.password?.message} />
        <Button type="submit" className="btn-submit">
          Register
        </Button>
        <RouterLink to="/login" className="centeredLink">
          Go to Login
        </RouterLink>
      </Form>
    </CenteredBlock>
  );
};

export default Registration;
