'use client';

import { styled, Box } from '@mui/material';

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
