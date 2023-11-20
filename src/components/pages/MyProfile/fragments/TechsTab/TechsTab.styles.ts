import { styled, Box } from '@mui/material';

export const TabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  flex: 1;
  gap: 1rem;
`;

export const GridContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
`;
