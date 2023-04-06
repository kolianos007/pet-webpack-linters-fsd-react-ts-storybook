import './styles.css';

import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import { RegistrationFormValues } from '@/pages/registration/Registration.types';
import { AuthSchema } from '@/shared/schemas';
import Button from '@/shared/ui/button';
import Form from '@/shared/ui/form';
import Input from '@/shared/ui/input';

const Registration: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormValues>({
    resolver: yupResolver(AuthSchema),
  });

  const onSubmit = (data: RegistrationFormValues) => {
    localStorage.setItem('registrationData', JSON.stringify(data));
    console.log('Registration data:', data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="registrationForm">
      <Input name="login" label="Login:" register={register('username')} error={errors.username?.message} />
      <Input
        name="password"
        label="Password:"
        type="password"
        register={register('password')}
        error={errors.password?.message}
      />
      <Button type="submit" className="btn-submit">
        Register
      </Button>
    </Form>
  );
};

export default Registration;
