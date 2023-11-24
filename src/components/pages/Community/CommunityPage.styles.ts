'use client';

import { Box, Typography, styled } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  max-height: calc(100vh - 160px);
  flex: 1;
  justify-content: flex-start;
  overflow-y: hidden;

  @media (max-width: 768px) {
    padding: 0;
    gap: 0;
    justify-content: center;
    max-height: calc(100vh - 130px);
  }
`;

export const Title = styled(Typography)`
  font-weight: 500;
  font-size: 2rem;
  margin: ${({ theme }) => theme.spacing(2, 0)};
  color: ${({ theme }) => theme.palette.text.primary};

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin: ${({ theme }) => theme.spacing(1, 0)};
  }
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
