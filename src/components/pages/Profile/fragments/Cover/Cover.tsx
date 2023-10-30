import { Box } from '@mui/material';
import React from 'react';

export function Cover() {
  return (
    <Box
      width="100%"
      height="250px"
      sx={{
        backgroundImage: 'url(/cover.jpeg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '8px 8px 0 0',
      }}
    />
  );
}
