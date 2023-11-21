import React from 'react';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  AsideContainer, HeroContainer, MainContainer, MainContent, RegisterButton, Title,
} from './Main.styles';

export function Main() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <MainContainer>
      <MainContent>
        <AsideContainer>

          <Image
            src="/logo.svg"
            alt="Hero"
            width={isMobile ? 200 : 400}
            height={isMobile ? 100 : 200}
          />
          <Title>
            Reunindo talentos tech em um só lugar
          </Title>
          <RegisterButton
            variant="contained"
            color="primary"
            href="/auth/register"
            sx={{
              width: '100%',
              height: '4rem',
              borderRadius: '2rem',
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}
          >
            Fazer inscrição
          </RegisterButton>
        </AsideContainer>

        <HeroContainer>
          <Image
            src="/hero.svg"
            alt="Hero"
            width={600}
            height={600}
          />
        </HeroContainer>
      </MainContent>
    </MainContainer>
  );
}
