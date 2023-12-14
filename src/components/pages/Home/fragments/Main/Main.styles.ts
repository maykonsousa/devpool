import { styled, Box, Typography, Button } from '@mui/material';

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

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: ${({ theme }) => theme.spacing(0, 2)};
  }
`;

export const AsideContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 1rem;
    padding: ${({ theme }) => theme.spacing(0, 2)};
  }
`;

export const HeroContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Title = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  font-weight: 700;
  text-align: center;
  margin: ${({ theme }) => theme.spacing(2, 0)};

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
  }
`;

export const RegisterButton = styled(Button)`
  width: 100%;
  height: 4rem;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 700;
  border-radius: 32px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 3rem;
  }
`;

export const SearchButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  height: 4rem;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 700;
  border-radius: 32px;

  @media (max-width: 768px) {
    max-width: 100%;
    height: 3rem;
  }
`;
