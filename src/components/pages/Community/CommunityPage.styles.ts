'use client';

import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-height: calc(100vh - 160px);
  flex: 1;
  justify-content: flex-start;
  overflow-y: hidden;
  
`;

export const CardsContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  height: 100%;
  width: 100%;
  overflow-y: auto;
  gap: 1rem;

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


  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    padding: 0 1rem;
    gap: 2rem;
  } 

`;
