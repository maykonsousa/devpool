'use client';

import { Link } from '@mui/material';
import React from 'react';
import { CopyRight, FooterContainer, FooterMenu } from './Footer.styles';

export function Footer() {
  return (
    <FooterContainer>
      <CopyRight variant="body1">
        © 2023, Desenvolvido por{' '}
        <Link href="http://maykonsousa.dev.br">Maykon Sousa</Link>
      </CopyRight>
      <FooterMenu>
        <Link href="http://maykonsousa.dev.br">Documentação</Link>
        <Link href="http://maykonsousa.dev.br">Repositório</Link>
        <Link href="http://maykonsousa.dev.br">Suporte</Link>
      </FooterMenu>
    </FooterContainer>
  );
}
