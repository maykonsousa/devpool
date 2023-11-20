'use client';

import { styled, Box } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 160px);
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
