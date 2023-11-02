'use client';

import {
  Box, Card, styled,
} from '@mui/material';

export const SignInPageContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

export const SignInFormContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  gap: 1rem;

`;
