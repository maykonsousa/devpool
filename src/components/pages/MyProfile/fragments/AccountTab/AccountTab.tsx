import { useSession, useUpload } from '@/hooks';
import {
  Box, Button, CircularProgress, Typography,
} from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import { ImageContainer } from './AccountTab.styles';

interface IValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
  avatar_url: string;
}

const INITIAL_VALUES:IValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
  avatar_url: '',
};

export function AccountTab() {
  const { user, loading } = useSession();
  const { url, openUpload } = useUpload();

  const methods = useForm<IValues>({ defaultValues: INITIAL_VALUES });

  const updateAccoutInformations = useCallback(() => {
    if (user) {
      methods.reset({
        name: user.name,
        email: user.email,
        username: user.username,
        avatar_url: user.avatar_url,
      });
    }
  }, [user, methods]);

  useEffect(() => {
    updateAccoutInformations();
  }, [user, updateAccoutInformations]);

  useEffect(() => {
    if (url) {
      methods.setValue('avatar_url', url);
    }
  }, [url, methods]);
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flex: 1,
        width: '100%',
        padding: '1rem',
      }}
    >
      <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>Informações da conta</Typography>
      {loading ? (
        <Box sx={{
          width: '100%', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
        >
          <CircularProgress size={96} />
        </Box>
      ) : (
        <FormProvider {...methods}>
          <Box sx={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            gap: '1rem',

          }}
          >
            <ImageContainer>
              <Image
                src={methods.watch('avatar_url') || '/fakeAvatar.png'}
                alt="avatar"
                autoCorrect="true"
                fill
              />
            </ImageContainer>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                gap: '.5rem',

              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '1rem' }}
                onClick={openUpload}
              >
                Alterar avatar
              </Button>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Tamanho máximo: 2mb</Typography>
            </Box>
          </Box>
        </FormProvider>
      )}
    </Box>
  );
}
