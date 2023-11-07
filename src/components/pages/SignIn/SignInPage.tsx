/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import React from 'react';
import Image from 'next/image';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import {
  Box, Typography, useMediaQuery, useTheme,
} from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '@/components/TextInput';
import { PassInput } from '@/components/PassInput';

import { Loading } from '@/components/Loading';
import { LoginButton } from '@/components/LoginButton';
import { useLogin } from '@/hooks';
import { loginFormValidations } from '@/validations/formValidations';
import { SignInFormContainer, SignInPageContainer } from './SignIn.styles';

interface IFormData {
  username: string;
  password: string;
  }

export function SignInPage() {
  const { handleCredentialsLogin, handleGithubLogin, loading } = useLogin();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const methods = useForm<IFormData>({ resolver: zodResolver(loginFormValidations) });

  const submitWithCredentials:SubmitHandler<IFormData> = async (data) => {
    await handleCredentialsLogin(data);
  };
  const handleSubmit = methods.handleSubmit(submitWithCredentials);

  return (
    <SignInPageContainer>
      <SignInFormContainer>
        <Image
          src="/logo.svg"
          alt="logo"
          width={isMobile ? 200 : 400}
          height={isMobile ? 100 : 200}
        />
        {loading ? (<Loading />) : (
          <FormProvider {...methods}>
            <TextInput
              name="username"
              label="Nome de usuário"
              placeholder="Digite seu nome de usuário"
            />
            <PassInput
              name="password"
              label="Senha"
              placeholder="Digite sua senha"

            />

            <LoginButton
              fullWidth
              typeCall="credentials"
              onClick={handleSubmit}
            />

            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
              my: 2,
            }}
            >
              <Box sx={{
                height: '2px',
                backgroundColor: 'info.main',
                width: '100%',
              }}
              />
              <Typography sx={{ mx: 2 }}>ou</Typography>
              <Box sx={{
                height: '2px',
                backgroundColor: 'info.main',
                width: '100%',
              }}
              />
            </Box>

            <LoginButton fullWidth typeCall="github" onClick={handleGithubLogin} />
          </FormProvider>
        )}

      </SignInFormContainer>

    </SignInPageContainer>
  );
}
