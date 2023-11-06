/* eslint-disable camelcase */
import { Box, Button } from '@mui/material';
import React from 'react';
import { TextInput } from '@components/TextInput';
import { Controller, useForm } from 'react-hook-form';
import { useSession } from 'next-auth/react';
import { PassInput } from '@components/PassInput';
import { useCreateUser, useFeedback } from '@/hooks';
import { useGetUserByEmail } from '@/hooks/useGetUserByEmail';
import { Loading } from '@components/Loading';
import { EmptyState } from '@/components/EmptyState';
import Image from 'next/image';
import { useUpload } from '@/hooks/useUpload';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepTitle,
} from '../styles';
import { AvatarContainer, FormContainer, GridContainer } from './AccountForm.styles';

interface IAccountProps extends IStepsBaseProps {
  isVisible: boolean;
  onNext: () => void;
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
  const { data: session } = useSession();
  const { data: userData, loading: getUserLoading } = useGetUserByEmail(session?.user?.email || '');
  const { showMessage } = useFeedback();

  const username = watch('username');
  const email = watch('email');
  const name = watch('name');
  const type = watch('type');
  const avatar_url = watch('avatar_url');
  const cover_url = watch('cover_url');
  const password = watch('password');

  const { createUser, data: createUserData, loading: createuserLoading } = useCreateUser({
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
  const { url, openUpload } = useUpload();

  const isLoading = getUserLoading || createuserLoading;

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
    if (url) {
      setValue('avatar_url', url);
    }
  }, [url, setValue]);

  React.useEffect(() => {
    if (session?.user) {
      fetch(`https://api.github.com/users/${session.user.name}`)
        .then((response) => response.json()).then((gitData) => {
          setValue('name', gitData.name);
        });
      setValue('username', session?.user?.name || '');
      setValue('email', session.user.email || '');
      setValue('avatar_url', session.user.image || '');
      setValue('type', 'developer');
    }
  }, [session, setValue]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Informações da Conta</StepTitle>

      <StepContent>
        {isLoading && <Loading />}
        {!isLoading && !userData && (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
          }}
          >

            <FormContainer>
              <AvatarContainer>
                <Image
                  src={avatar_url || '/avatar.svg'}
                  width={120}
                  height={120}
                  alt="avatar"
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '8px',
                    cursor: 'pointer',
                  }}
                  onClick={openUpload}
                />
              </AvatarContainer>
              <GridContainer>
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
                      disabled
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
              </GridContainer>
              <Controller<IFormValues>
                control={control}
                name="email"
                render={({ field }) => (
                  <TextInput
                    label="E-mail"
                    disabled
                    {...field}
                  />
                )}
              />

            </FormContainer>
          </Box>
        )}
        {!isLoading && userData && (
          <EmptyState
            type="success"
            message="Etapa concluída. Continue para prosseguir com o cadastro"
          />
        )}

      </StepContent>
      <ActionsContainer>
        <Button
          fullWidth
          variant="outlined"
          onClick={onPrevious}
          color="primary"
        >
          Voltar
        </Button>
        <Button
          fullWidth
          disabled={isLoading}
          variant="contained"
          color="primary"
          onClick={() => {
            if (!userData) {
              onSubmit();
            } else {
              onNext();
            }
          }}
        >
          Continuar
        </Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
