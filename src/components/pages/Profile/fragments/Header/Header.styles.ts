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

  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(1)};
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const HeaderAvatar = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  border-radius: 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  background-color: ${({ theme }) => theme.palette.background.paper};
  margin-top: -60px;
  z-index: 1;

  @media (max-width: 900px) {
    margin-top: 0;
    width: 80px;
    height: 80px;
  }
`;
