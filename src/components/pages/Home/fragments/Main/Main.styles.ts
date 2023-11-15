import { styled, Box } from '@mui/material';

export const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 64px);
  background-image: url('/wave.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${({ theme }) => theme.palette.background.default};
  width: 100%;
`;

export const MainContent = styled(Box)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing(4, 2)};
`;
