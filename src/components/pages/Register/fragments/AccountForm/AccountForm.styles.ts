'use client';

import { styled, Box } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  width: '100%',
  maxWidth: '900px',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
  gap: '2rem',

  flex: 1,
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
  },
}));
