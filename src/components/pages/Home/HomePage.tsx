'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Button } from '@mui/material';
import { Container, Message } from './HomePage.styles';

export function HomePage() {
  return (
    <Container>
      <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100} />
      <Message>
        A plataforma DevPool é um projeto que visa conectar desenvolvedores,
        recrutadores e empresas.
      </Message>
      <Message>
        No momento ainda estamos construindo as principais features,
        mas caso queira acompanhar o projeto, você pode navegar pelo que já temos.
      </Message>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: '300px',
        marginTop: '20px',
        gap: 2,
      }}
      >

        <Button variant="contained" href="/auth/login">Fazer Login</Button>
        <Button variant="outlined" href="/auth/register">Criar Conta</Button>
      </Box>
    </Container>
  );
}
