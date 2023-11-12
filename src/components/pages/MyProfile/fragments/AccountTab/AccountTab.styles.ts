'use client';

import { styled, Box } from '@mui/material';

export const AccountTabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  flex: 1;
  gap: 1rem;
`;

export const AvatarSession = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AvatarActionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  position: relative;
  border-radius: 8px;
  padding: 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 4px solid ${({ theme }) => theme.palette.primary.main};
  
  


  @media (max-width: 900px) {
    margin-top: 0;
    width: 80px;
    height: 80px;
  }


`;

export const FormSession = styled(Box)`
  display: flex;
  padding: 1rem 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 900px;
`;

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  gap: 1rem;
  width: 100%;


  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ActionsContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;  
  max-width: 900px;
`;
