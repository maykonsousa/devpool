import { GitHub } from '@mui/icons-material';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

import React from 'react';

interface LoginButtonProps extends ButtonProps {
  typeCall: 'github' | 'credentials';
  isLoading?: boolean;
}

export function LoginButton({
  typeCall,
  isLoading,
  ...rest
}: LoginButtonProps) {
  return (
    <Button
      variant="contained"
      sx={{
        'height': '56px',
        'borderRadius': '10px',
        'backgroundColor': typeCall === 'github' ? 'black' : 'primary.main',
        '&:hover': {
          backgroundColor:
            typeCall === 'github' ? 'secondary.dark' : 'primary.dark',
        },
        'color': 'white',
        'fontWeight': 'bold',
        'gap': '10px',
      }}
      {...rest}
    >
      {isLoading && <CircularProgress size={24} />}
      {typeCall === 'github' && !isLoading && <GitHub format={3} />}
      {typeCall === 'github' ? 'Login com Github' : 'Entrar'}
    </Button>
  );
}
