'use client';

import {
  styled, Box, Card,
} from '@mui/material';

export const Container = styled(Box)`
padding-top: ${({ theme }) => theme.spacing(2.5)};
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 1rem;
  flex: 1;
  width: 100%;

`;

export const Sidebar = styled(Box)`
display: flex;
flex-direction: column;
  gap: 1rem;
`;

export const Content = styled(Box)`
display: flex;
flex-direction: column;
gap: 1rem;
width: 100%;
`;

export const AboutCard = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
`;

export const TechsCard = styled(Card)`
  display: flex;
  border-radius: 8px;
  flex-direction: column;
`;
