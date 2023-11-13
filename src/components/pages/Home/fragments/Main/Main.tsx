import React from 'react';
import Image from 'next/image';
import { Box, Button, Typography } from '@mui/material';
import { MainContainer, MainContent } from './Main.styles';

export function Main() {
  return (
    <MainContainer>
      <MainContent>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
          gap: '1rem',

        }}
        >
          <Image
            src="/logo.svg"
            alt="Hero"
            width={400}
            height={200}
          />
          <Typography variant="h3" component="h1" textAlign="center">
            Reunindo talentos tech em um só lugar
          </Typography>
          <Button
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
            Me inscrever agora
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            width: '100%',
          }}

        >
          <Image
            src="/hero.svg"
            alt="Hero"
            width={800}
            height={800}
          />
        </Box>
      </MainContent>
    </MainContainer>
  );
}
