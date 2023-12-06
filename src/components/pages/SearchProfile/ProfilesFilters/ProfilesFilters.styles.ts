import { styled, Button, Box, Typography, IconButton } from '@mui/material';

export const ActionButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  font-weight: bold;
`;
export const FilterContainer = styled(Box)`
  width: 100%;
  min-width: 400px;
  max-width: 600px;
  padding: 16px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  position: relative;

  //mobile
  @media (max-width: 900px) {
    max-width: 100%;
    min-width: 100%;
  }
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
`;

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 16px;
`;

export const FilterGroup = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const ButtonGroup = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;
