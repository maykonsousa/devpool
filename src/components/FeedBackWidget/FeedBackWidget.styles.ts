import {
  styled, Card, IconButton as MuiIconButton, Box,
} from '@mui/material';

export const CardContainer = styled(Card)`
  position: fixed;
  bottom: 140px;
  right: 1rem;
  width: 100%;
  max-width: 400px;

  z-index: 1000;


  @media (max-width: 768px) {
    bottom: 80px;
    top: 16px;
    right: 1rem;
    width: 100%;
    width: calc(100% - 2rem);
    
  }

`;

export const CardHeader = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

`;

export const ActionButton = styled(MuiIconButton)`
  position: fixed;
  bottom: 76px;
  right: 1rem;
  z-index: 1000;
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.common.white};

  &:hover {
    background: ${({ theme }) => theme.palette.primary.dark};
  }


  @media (max-width: 768px) {
    bottom: 40px;
    margin-top: 1rem;
  }
`;
