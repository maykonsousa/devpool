'use client';

import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;
