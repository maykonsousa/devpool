import React from 'react';
import { GitHub } from '@mui/icons-material';
import { Button } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function GithubLoginButton() {
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
        backgroundColor: 'black',
        color: 'white',
        fontWeight: 'bold',
        gap: '10px',

      }}
      onClick={() => {
        signIn('github');
      }}
    >
      <GitHub format={3} />
      Login com Github

    </Button>
  );
}
