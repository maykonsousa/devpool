import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';

interface InfoRowProps {
  icon: React.ReactElement;
  label: string;
  value?: string;
}

export function InFormationRow({ label, icon, value }: InfoRowProps) {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        alignItems: 'center',
        flexWrap: 'wrap',
        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          alignItems: 'flex-start',
          marginBottom: theme.spacing(2),
        },
        [theme.breakpoints.down('sm')]: {
          display: 'flex',
          flexDirection: 'row',
          gap: 1,
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: 0,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 1,
          alignItems: 'center',
        }}
      >
        {icon}
        <Typography variant="body1" fontWeight={700}>
          {label}
        </Typography>
      </Box>
      <Typography variant="body2" fontWeight={400}>
        {value}
      </Typography>
    </Box>
  );
}
