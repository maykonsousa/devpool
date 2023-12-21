import { GitHub, LinkedIn } from '@mui/icons-material';
import { Button, ButtonProps, CircularProgress } from '@mui/material';

import React from 'react';

interface LoginButtonProps extends ButtonProps {
  typeCall: 'github' | 'credentials' | 'linkedin';
  isLoading?: boolean;
}

export function LoginButton({
  typeCall,
  isLoading,
  ...rest
}: LoginButtonProps) {
  const buttonEnum = {
    linkedin: {
      label: 'Entrar com LinkedIn',
      icon: <LinkedIn format={3} />,
      color: 'info.main',
      hoverColor: 'info.dark',
      textColor: 'black',
    },
    github: {
      label: 'Entrar com GitHub',
      icon: <GitHub format={3} />,
      color: 'black',
      hoverColor: 'secondary.dark',
      textColor: 'white',
    },
    credentials: {
      label: 'Entrar',
      icon: null,
      color: 'primary.main',
      hoverColor: 'primary.dark',
      textColor: 'white',
    },
  };

  return (
    <Button
      variant="contained"
      sx={{
        'height': '56px',
        'borderRadius': '10px',
        'backgroundColor': buttonEnum[typeCall].color,
        '&:hover': {
          backgroundColor: buttonEnum[typeCall].hoverColor,
        },
        'color': buttonEnum[typeCall].textColor,
        'fontWeight': 'bold',
        'gap': '10px',
      }}
      {...rest}
    >
      {isLoading && <CircularProgress size={24} />}
      {buttonEnum[typeCall].icon}
      {buttonEnum[typeCall].label}
    </Button>
  );
}
