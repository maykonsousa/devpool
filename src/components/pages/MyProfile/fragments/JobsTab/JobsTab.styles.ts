import { styled, Box } from '@mui/material';

export const JobsTabContainer = styled(Box)`
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
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 1rem;
  width: 100%;


  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    border: 1px solid red;
    
  }
`;
