import { styled, Box, Typography } from '@mui/material';

export const FooterContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(2, 0)};
  width: 100%;
  flex: 1;
  gap: 1rem;
  max-width: 1440px;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    gap: 0;
    justify-content: center;
  }
`;

export const CopyRight = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-weight: 400;
  margin: 0;
  padding: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-top: 1rem;
  }
`;

export const FooterMenu = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 1rem;
    justify-content: center;
  }
`;
