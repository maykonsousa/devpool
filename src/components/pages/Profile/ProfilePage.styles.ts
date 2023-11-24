'use client';

import { Box, styled } from '@mui/material';

export const ProfilePageContainer = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Sidebar = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const Content = styled(Box)`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.paper};
`;
