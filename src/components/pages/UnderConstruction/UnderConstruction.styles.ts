'use client';

import { styled, Box, Typography } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.palette.background.paper};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.palette.primary.main};
    border-radius: 4px;
  }
`;

export const Title = styled(Typography)`
  font-weight: 700;
  font-size: ${({ theme }) => theme.typography.h3.fontSize};

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled(Typography)`
  font-weight: 400;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(2)};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
