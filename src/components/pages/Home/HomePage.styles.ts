'use client';

import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

export const Message = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;
