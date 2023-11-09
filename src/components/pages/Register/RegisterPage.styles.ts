'use client';

import { styled, Box } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  flex: 1;
  padding-top: 10rem;
  overflow: auto;
  gap: 4rem;
`;

export const StepList = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  gap: 2;
  flex: 1;
`;
