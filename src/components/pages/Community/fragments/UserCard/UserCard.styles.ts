'use client';

import { styled, Card, Box, Typography, IconButton } from '@mui/material';

export const CardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  height: 280px;
  padding: 16px;
  gap: 16px;
  border-radius: 10px;
`;

export const CardHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const InfoContainer = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTitle = styled(Typography)`
  font-weight: 600;
  flex: 1;
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
`;

export const Bio = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  color: ${({ theme }) => theme.palette.text.secondary};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  white-space: pre-line;

  @media (max-width: 768px) {
    -webkit-line-clamp: 2;
  }
`;

export const CardContent = styled(Box)`
  flex: 1;
`;

export const CardFooter = styled(Box)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-start;
`;

export const SocialIcon = styled(IconButton)`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.primary.main};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  svg {
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
