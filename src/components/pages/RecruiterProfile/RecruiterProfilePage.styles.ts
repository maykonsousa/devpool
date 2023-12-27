'use client';

import { styled, Box } from '@mui/material';

export const ProfilePageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Main = styled(Box)`
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
