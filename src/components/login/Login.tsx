import React from 'react';

import { useForm } from 'react-hook-form';

// import { FormControlWrapper, LoginContainer } from '@/components/login/Login.styled';
import { useFetchUser, useLogin } from '@/features/auth/auth.hook';

import type { Component, Layout } from '@/types';
import type { SubmitHandler } from 'react-hook-form';

interface FormControlProps {
  label: string;
  labelFor: string;
  error?: string;
}

const FormControl: Layout<FormControlProps> = ({ children, label, labelFor, error }) => (
  // <FormControlWrapper>
  <div>
    <label htmlFor={labelFor}>{label}</label>
    {children}
    {error ? <p className="error">{error}</p> : null}
    </div>
  // </FormControlWrapper>
);

interface FormData {
  email: string;
  password: string;
}

const Login: Component = () => {
  const { mutateAsync, isPending: isLogging } = useLogin();
  const { isLoading: isFetching, fetchUser } = useFetchUser();
  const isLoading = isLogging || isFetching;

  const { formState, register, handleSubmit: onSubmit } = useForm<FormData>();
  const { errors } = formState;

  const handleSubmit: SubmitHandler<FormData> = async data => {
    await mutateAsync(data);
    await fetchUser();
  };

  return (
    // <LoginContainer onSubmit={onSubmit(handleSubmit)}>
      <FormControl label="Email" labelFor="temp_email" error={errors.email?.message}>
        <input
          {...register('email', { required: 'Email is required' })}
          id="temp_email"
          type="text"
        />
      </FormControl>
      <FormControl label="Password" labelFor="temp_password" error={errors.password?.message}>
        <input
          {...register('password', { required: 'Password is required' })}
          id="temp_password"
          type="password"
        />
      </FormControl>
      <div>
        <button type="submit" disabled={isLoading}>
          Submit
        </button>
      </div>
    // </LoginContainer>
  );
};

export default Login;
