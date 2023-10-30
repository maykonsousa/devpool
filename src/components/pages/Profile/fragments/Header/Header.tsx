'use client';

import React from 'react';
import Image from 'next/image';
import { Box, Typography, useTheme } from '@mui/material';
import { Computer, EqualizerSharp, LocationOn } from '@mui/icons-material';
import { HeaderAvatar, HeaderContainer } from './Header.styles';

export function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <HeaderAvatar>
        <Image
          src="https://avatars.githubusercontent.com/u/53588064?v=4"
          width={120}
          height={120}
          style={{
            width: '100%',
            height: '100%',
            borderRadius: '8px',
          }}
          alt="avatar"
        />
      </HeaderAvatar>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          alignItems: 'flex-start',
          justifyContent: 'center',
          width: '100%',
          [theme.breakpoints.down('md')]: {
            alignItems: 'center',
          },
        }}
      >
        <Typography variant="h4">Maykon Sousa</Typography>
        <Box sx={{
          display: 'flex',
          gap: 4,
          alignItems: 'center',

        }}
        >
          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
          >
            <Computer />
            <Typography variant="body1">Front-End</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
          >
            <EqualizerSharp />
            <Typography variant="body1">Pleno</Typography>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'center',
            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
          >
            <LocationOn />
            <Typography variant="body1">João Pessoa/PB</Typography>
          </Box>
        </Box>
      </Box>
    </HeaderContainer>
  );
}
