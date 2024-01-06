import { styled, Box } from '@mui/material';

export const ProjectsTabContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
  width: 100%;
  flex: 1;
  gap: 1rem;
`;
export const AvatarSession = styled(Box)`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1rem;
`;

export const AvatarActionContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const ImageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 120px;
  position: relative;
  border-radius: 8px;
  padding: 8px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
  border: 4px solid ${({ theme }) => theme.palette.primary.main};

  @media (max-width: 900px) {
    margin-top: 0;
    width: 120px;
    height: 80px;
  }
`;

export const CheckboxContainer = styled(Box)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  width: 100%;
`;
