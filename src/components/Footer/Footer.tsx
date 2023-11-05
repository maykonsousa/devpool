'use client';

import {
  Box, Link, Typography, useTheme,
} from '@mui/material';
import React from 'react';

export function Footer() {
  const theme = useTheme();
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      maxWidth: '1440px',
      padding: `${theme.spacing(2)} 0`,
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: theme.spacing(2),
      },
    }}
    >
      <Typography variant="body1">
        © 2023, Desenvolvido por
        {' '}
        <Link href="http://maykonsousa.dev.br">
          Maykon Sousa
        </Link>
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
      }}
      >
        <Link href="http://maykonsousa.dev.br">
          Documentação
        </Link>
        <Link href="http://maykonsousa.dev.br">
          Repositório
        </Link>
        <Link href="http://maykonsousa.dev.br">
          Suporte
        </Link>
      </Box>
    </Box>
  );
}
