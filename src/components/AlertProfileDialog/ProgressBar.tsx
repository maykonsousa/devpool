import {
  Box,
  CircularProgress,
  CircularProgressProps,
  Typography,
} from '@mui/material';
import React from 'react';

interface IProgressBarProps extends CircularProgressProps {
  value: number;
}

export function ProgressBar({ value, ...props }: IProgressBarProps) {
  const generateColor = (count: number) => {
    if (count < 50) {
      return 'error';
    }
    if (count < 75) {
      return 'warning';
    }
    return 'success';
  };
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={value}
        color={generateColor(value)}
        {...props}
        size={92}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          component="div"
          fontWeight={700}
        >{`${Math.round(value)}%`}</Typography>
      </Box>
    </Box>
  );
}
