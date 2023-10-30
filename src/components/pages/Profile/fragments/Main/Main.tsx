import { Box } from '@mui/material';
import React from 'react';

interface MainProps {
  children: React.ReactNode
}

export function Main({ children }: MainProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '2fr 5fr',
        gap: '20px',

        width: '100%',
        height: '100%',
        paddingTop: '20px',
      }}
    >
      {children}
    </Box>
  );
}
