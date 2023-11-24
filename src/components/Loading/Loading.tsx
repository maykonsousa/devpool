import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export function Loading() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: '2rem',
        flex: 1,
      }}
    >
      <CircularProgress color="primary" size={96} />
    </Box>
  );
}
