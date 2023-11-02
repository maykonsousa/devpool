import { Box, styled } from '@mui/material';

export const PageContainer = styled(Box)`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1440px;
  height: 100vh;

  @media (max-width: 768px) {
    padding: 0 8px;
  }
`;
