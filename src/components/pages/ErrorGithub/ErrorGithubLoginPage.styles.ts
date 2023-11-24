'use client';

import { styled, Box } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  flex: 1;
  margin: 0 auto;
`;

export const MainContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AsideContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-width: 600px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
  flex: 1;
`;
