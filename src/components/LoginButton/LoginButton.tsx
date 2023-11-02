import { GitHub } from '@mui/icons-material';
import { Button } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import React from 'react';

interface LoginButtonProps {
  type: 'github' | 'credentials';
}

export function LoginButton({ type }:LoginButtonProps) {
  const { data } = useSession();
  const router = useRouter();

  if (data) {
    router.push('/profile/maykonsousa');
  }

  return (
    <Button
      variant="contained"
      sx={{
        height: '56px',
        width: '100%',
        borderRadius: '10px',
        backgroundColor: type === 'github' ? 'black' : 'primary.main',
        '&:hover': {
          backgroundColor: type === 'github' ? 'secondary.dark' : 'primary.dark',
        },
        color: 'white',
        fontWeight: 'bold',
        gap: '10px',

      }}
      onClick={() => {
        signIn(type);
      }}
    >
      {type === 'github' && <GitHub format={3} />}
      {type === 'github' ? 'Login com Github' : 'Entrar'}

    </Button>
  );
}
