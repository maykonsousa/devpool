/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import React, { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form';
import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { zodResolver } from '@hookform/resolvers/zod';
import { TextInput } from '@/components/TextInput';
import { PassInput } from '@/components/PassInput';

import { Loading } from '@/components/Loading';
import { LoginButton } from '@/components/LoginButton';
import { useFeedback, useLogin } from '@/hooks';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { loginFormValidations } from '@/validations/loginFormValidations';
import { SignInFormContainer, SignInPageContainer } from './SignIn.styles';

interface IFormData {
  username: string;
  password: string;
}

export function SignInPage() {
  const {
    handleCredentialsLogin,
    handleGithubLogin,
    handleLinkedinLogin,
    loading,
  } = useLogin();
  const params = useSearchParams();
  const { showMessage } = useFeedback();

  const theme = useTheme();
  const { data: session, status } = useSession();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const methods = useForm<IFormData>({
    resolver: zodResolver(loginFormValidations),
  });
  const router = useRouter();
  const errorLogin = params.get('error');

  const submitWithCredentials: SubmitHandler<IFormData> = async (data) => {
    await handleCredentialsLogin(data);
  };

  const validateError = useCallback(() => {
    if (errorLogin === 'CredentialsSignin' && status === 'unauthenticated') {
      showMessage({
        message: 'Falha ao fazer login. Verifique suas credenciais.',
        type: 'error',
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errorLogin, status]);
  const handleSubmit = methods.handleSubmit(submitWithCredentials);
  useEffect(() => {
    if (session) {
      router.push('/community');
    }
  }, [session, router]);

  useEffect(() => {
    validateError();
  }, [validateError]);
  return (
    <SignInPageContainer>
      <SignInFormContainer>
        <Image
          src="/logo.svg"
          alt="logo"
          width={isMobile ? 200 : 400}
          height={isMobile ? 100 : 200}
          priority
        />
        {loading ? (
          <Loading />
        ) : (
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

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
                my: 2,
              }}
            >
              <Box
                sx={{
                  height: '2px',
                  backgroundColor: 'info.main',
                  width: '100%',
                }}
              />
              <Typography sx={{ mx: 2 }}>ou</Typography>
              <Box
                sx={{
                  height: '2px',
                  backgroundColor: 'info.main',
                  width: '100%',
                }}
              />
            </Box>

            <LoginButton
              fullWidth
              typeCall="github"
              onClick={handleGithubLogin}
            />
            <LoginButton
              fullWidth
              typeCall="linkedin"
              onClick={handleLinkedinLogin}
            />
          </FormProvider>
        )}
      </SignInFormContainer>
    </SignInPageContainer>
  );
}
