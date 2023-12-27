import { Box, useTheme } from '@mui/material';
import React from 'react';

export function Cover() {
  const theme = useTheme();

  return (
    <Box
      width="100%"
      height="200px"
      sx={{
        backgroundImage: 'url(/recruiterCover.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '8px 8px 0 0',
        [theme.breakpoints.down('md')]: {
          display: 'none',
        },
      }}
    />
  );
}
