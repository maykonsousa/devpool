import { ErrorOutline, InboxOutlined, Verified } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import React from 'react';

type StateType = 'empty' | 'error' | 'success';

interface IEmptyStateProps {
  type: StateType;
  message: string;
}

export function EmptyState({ type, message }:IEmptyStateProps) {
  const iconMap = {
    empty: <InboxOutlined color="secondary" fontSize="large" />,
    error: <ErrorOutline fontSize="large" color="error" />,
    success: <Verified color="success" fontSize="large" />,
  };
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '2rem',
      }}

    >
      {iconMap[type]}
      <Typography variant="h6" component="h6" sx={{ marginTop: '1rem', textAlign: 'center' }}>{message}</Typography>

    </Box>
  );
}
