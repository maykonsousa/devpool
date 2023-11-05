/* eslint-disable camelcase */
import { Button } from '@mui/material';
import React from 'react';
import { TextInput } from '@/components/TextInput';
import { Controller, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { PassInput } from '@/components/PassInput';
import { useCreateUser, useFeedback } from '@/hooks';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';
import { FormContainer } from './AccountForm.styles';

interface IAccountProps extends IStepsBaseProps {
  isVisible: boolean;
}

type UserType = 'admin' | 'developer' | 'recruiter' ;

interface IFormValues {
    name: string;
    email: string;
    type: UserType
    username: string
    avatar_url: string
    cover_url: string
    password: string
    confirmPassword: string
}

const INITIAL_VALUES:IFormValues = {
  name: '',
  email: '',
  type: 'developer',
  username: '',
  avatar_url: '',
  cover_url: '',
  password: '',
  confirmPassword: '',
};

export function AccountForm({ isVisible, onNext, onPrevious }:IAccountProps) {
  const {
    setValue, watch, formState: { errors }, handleSubmit, control,
  } = useForm<IFormValues>({ defaultValues: INITIAL_VALUES });
  const { data } = useSession();
  const { showMessage } = useFeedback();

  const username = watch('username');
  const email = watch('email');
  const name = watch('name');
  const type = watch('type');
  const avatar_url = watch('avatar_url');
  const cover_url = watch('cover_url');
  const password = watch('password');

  const { createUser, data: createUserData } = useCreateUser({
    input: {
      name,
      email,
      type,
      username,
      avatar_url,
      cover_url,
      password,
    },
  });

  const onSubmit = handleSubmit(async () => {
    await createUser();
    if (createUserData?.createUser.status === 'success') {
      showMessage({
        message: 'Usuário criado com sucesso!',
        type: 'success',
      });
      if (onNext) {
        onNext();
      }
    } else {
      showMessage({
        message: 'Erro ao criar usuário',
        type: 'error',
      });
    }
  });

  React.useEffect(() => {
    if (data?.user) {
      fetch(`https://api.github.com/users/${data.user.name}`)
        .then((response) => response.json()).then((gitData) => {
          setValue('name', gitData.name);
        });
      setValue('username', data?.user?.name || '');
      setValue('email', data.user.email || '');
      setValue('avatar_url', data.user.image || '');
      setValue('type', 'developer');
    }
  }, [data, setValue]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Informações da Conta</StepTitle>
      <StepSubtitle>Informe os dados abaixo para criar sua conta</StepSubtitle>
      <StepContent>
        <FormContainer>
          <Controller<IFormValues>
            control={control}
            name="name"
            render={({ field }) => (
              <TextInput
                label="Nome"
                error={!!errors.name}
                errorMessage={errors.name?.message}
                {...field}
              />
            )}
          />

          <Controller<IFormValues>
            control={control}
            name="username"
            render={({ field }) => (
              <TextInput
                label="Username"
                {...field}
              />
            )}
          />
          <Controller<IFormValues>
            control={control}
            rules={{
              validate: (value) => !!value || 'Campo obrigatório',
            }}
            name="password"
            render={({ field }) => (
              <PassInput
                label="Senha"
                error={!!errors.password}
                errorMessage={errors.password?.message}
                {...field}
              />
            )}
          />
          <Controller<IFormValues>
            control={control}
            name="confirmPassword"
            rules={{
              validate: (value) => value === watch('password') || 'As senhas devem ser iguais',
            }}
            render={({ field }) => (
              <PassInput
                label="Confirmar senha"
                error={!!errors.confirmPassword}
                errorMessage={errors.confirmPassword?.message}
                {...field}
              />
            )}
          />
          <Controller<IFormValues>
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                label="E-mail"
                {...field}
              />
            )}
          />

        </FormContainer>
      </StepContent>
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onSubmit}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
