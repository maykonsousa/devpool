'use client';

import { Box, styled } from '@mui/material';

export const DefaultLayoutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  gap: 1rem;
`;

export const Main = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
  width: 100%;

  @media (max-width: 1400px) {
    padding: 0 1rem;
  }
`;
