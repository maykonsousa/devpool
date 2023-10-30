'use client';

import { Box, styled } from '@mui/material';

export const HeaderContainer = styled(Box)`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
background-color: ${({ theme }) => theme.palette.background.paper};
gap: ${({ theme }) => theme.spacing(2.5)};
padding: ${({ theme }) => theme.spacing(2.5)};
border-radius: 0 0 8px 8px; 
`;

export const HeaderAvatar = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  margin-top: -60px;
  z-index: 1;

`;
