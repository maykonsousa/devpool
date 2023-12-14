import React from 'react';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import {
  AsideContainer,
  HeroContainer,
  MainContainer,
  MainContent,
  RegisterButton,
  SearchButton,
  Title,
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
          <Title>Reunindo talentos tech em um só lugar</Title>
          <RegisterButton
            variant="contained"
            color="primary"
            href="/auth/register"
          >
            Fazer inscrição
          </RegisterButton>
          <SearchButton
            variant="outlined"
            color="primary"
            href="/search-profiles"
          >
            <Search fontSize="large" />
            Buscar perfis
          </SearchButton>
        </AsideContainer>

        <HeroContainer>
          <Image src="/hero.svg" alt="Hero" width={600} height={600} />
        </HeroContainer>
      </MainContent>
    </MainContainer>
  );
}
