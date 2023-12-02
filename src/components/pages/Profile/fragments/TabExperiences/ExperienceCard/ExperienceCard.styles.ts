import {
  styled,
  Box,
  IconButton,
  Paper,
  Typography,
  Chip,
} from '@mui/material';

export const JobContainer = styled(Box)`
  display: flex;
  gap: 4rem;
  border-left: 2px solid ${({ theme }) => theme.palette.divider};
  padding-bottom: 1rem;
  width: 100%;
`;

export const IndicatorContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  transform: translateX(-1.5rem);
  align-items: center;
  width: 100%;
`;

export const IndicatorIcon = styled(IconButton)`
  width: 3rem;
  height: 3rem;
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const JobContent = styled(Paper)`
  padding: 1rem;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const JobTitle = styled(Typography)`
  font-weight: bold;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`;

export const JobOffice = styled(Chip)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  padding: 0.5rem;
`;

export const JobInformations = styled(Box)`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;

export const JobDate = styled(Typography)`
  display: flex;
  align-items: center;
  text-align: right;
  gap: 0.5rem;
  color: ${({ theme }) => theme.palette.text.secondary};

  svg {
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const DateContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const JobDescription = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.secondary};
`;

export const TechsContainer = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const TechItem = styled(Chip)``;
