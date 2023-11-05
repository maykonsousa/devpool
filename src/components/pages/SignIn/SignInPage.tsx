/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import React from 'react';
import Image from 'next/image';

import { TextInput } from '@/components/TextInput';
import { PassInput } from '@/components/PassInput';
import { Box, Typography } from '@mui/material';
import { LoginButton } from '@/components/LoginButton';
import { useGithubLogin } from '@/hooks';
import { SignInFormContainer, SignInPageContainer } from './SignIn.styles';

export function SignInPage() {
  const { handleLogin, loading } = useGithubLogin();

  return (
    <SignInPageContainer>
      <SignInFormContainer>
        <Image src="/logo.svg" alt="logo" width="400" height="200" />

        <TextInput
          label="Nome de usuário"
          placeholder="Digite seu nome de usuário"
        />
        <PassInput
          label="Senha"
          placeholder="Digite sua senha"
        />

        <LoginButton typeCall="credentials" onClick={() => {}} />

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

        <LoginButton fullWidth typeCall="github" onClick={handleLogin} isLoading={loading} />

      </SignInFormContainer>

    </SignInPageContainer>
  );
}
