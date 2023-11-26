import { Box, Card, Typography, styled } from '@mui/material';

export const TabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1;
  padding: 1rem;
`;

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
`;

export const Main = styled(Box)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  width: 100%;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const InformationsContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  flex: 1;
  gap: 1rem;
`;
export const FormContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  flex: 1;
  gap: 1rem;
  padding: 1rem;
`;

export const InformationCard = styled(Card)`
  width: 100%;
  flex: 1;
  padding: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    padding-bottom: 2rem;
  }
`;

export const InformationTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  margin-bottom: 1rem;
  width: 100%;
  text-align: left;
`;

export const FormTitle = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  margin-bottom: 1rem;
  width: 100%;
  text-align: center;
`;
