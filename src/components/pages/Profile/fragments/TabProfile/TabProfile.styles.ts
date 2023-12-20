'use client';

import { styled, Box } from '@mui/material';

export const Container = styled(Box)`
  padding-top: ${({ theme }) => theme.spacing(2.5)};
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 1rem;
  flex: 1;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Sidebar = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
`;

export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  height: 100%;
`;
