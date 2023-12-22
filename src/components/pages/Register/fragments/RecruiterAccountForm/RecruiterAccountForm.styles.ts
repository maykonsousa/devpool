'use client';

import { styled, Box } from '@mui/material';

export const FormContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '1rem',
  gap: '1rem',

  flex: 1,
  [theme.breakpoints.down('md')]: {
    gap: '1rem',
  },
}));

export const GridContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
  width: '100%',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
}));

export const AvatarContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 4px solid ${({ theme }) => theme.palette.primary.main};

  @media (max-width: 900px) {
    width: 80px;
    height: 80px;
  }
`;
