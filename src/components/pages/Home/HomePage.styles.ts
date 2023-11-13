'use client';

import { Box, Typography, styled } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  //background: rgb(53,48,78);
  //background: linear-gradient(90deg, rgba(53,48,78,1) 0%, rgba(255,102,120,1) 100%, rgba(78,48,62,1) 100%);
  overflow: auto;
`;

export const Message = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  font-weight: 500;
  color: ${({ theme }) => theme.palette.text.primary};
`;
