'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';

import { useSearchParams } from 'next/navigation';
import { setCookie } from 'nookies';
import {
  AsideContainer,
  ContentContainer,
  MainContainer,
  PageContainer,
} from './ErrorGithubLoginPage.styles';

export function ErrorGithubLoginPage() {
  const theme = useTheme();
  const params = useSearchParams();

  const accessToken = params.get('access_token');

  useEffect(() => {
    if (accessToken) {
      setCookie(null, 'accessToken', accessToken, {
        maxAge: 15 * 60,
        path: '/',
      });
    }
  }, [accessToken]);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <PageContainer>
      <MainContainer>
        <AsideContainer>
          <Image
            src="/manWithTablet.svg"
            alt="Error GitHub Login"
            width={190}
            height={540}
          />
        </AsideContainer>
        <ContentContainer>
          <Image
            src="/logo.svg"
            alt="Error GitHub Login"
            width={isMobile ? 200 : 400}
            height={isMobile ? 100 : 200}
            priority
          />

          <Typography
            variant="h1"
            component="h1"
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Ops!
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Parece que você ainda não tem uma conta em nossa plataforma.
          </Typography>
          <Typography
            variant="body1"
            component="h3"
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
          >
            Clique no botão abaixo para criar sua conta.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/auth/register?userType=developer"
            sx={{ padding: '1rem 2rem' }}
          >
            Criar conta
          </Button>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </PageContainer>
  );
}
