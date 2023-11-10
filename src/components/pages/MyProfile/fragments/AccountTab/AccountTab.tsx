import { useGetRoles, useSession, useUpload } from '@/hooks';
import {
  Button, Typography,
} from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import { Loading } from '@/components/Loading';
import { TextInput } from '@/components/TextInput';
import { PassInput } from '@/components/PassInput';
import { Select } from '@/components/Select';
import {
  AccountTabContainer,
  AvatarActionContainer,
  AvatarSession,
  FormSession,
  GridContainer,
  ImageContainer,
} from './AccountTab.styles';

interface IValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
  avatar_url: string;
  bio: string;
  role: string;
}

const INITIAL_VALUES:IValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
  avatar_url: '',
  bio: '',
  role: '',
};

export function AccountTab() {
  const { user, loading } = useSession();
  const { url, openUpload } = useUpload();
  const { data: roles } = useGetRoles();
  const mapedRoles = roles?.map((role) => ({
    value: role.name,
    label: role.name,
  }));
  const methods = useForm<IValues>({ defaultValues: INITIAL_VALUES });

  const updateAccoutInformations = useCallback(() => {
    if (user) {
      methods.reset({
        name: user.name,
        email: user.email,
        username: user.username,
        avatar_url: user.avatar_url,
        role: user.role,
        bio: user.bio,
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
    <AccountTabContainer>
      <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>Informações da conta</Typography>
      {loading ? <Loading /> : (
        <FormProvider {...methods}>
          <AvatarSession>
            <ImageContainer>
              <Image
                src={methods.watch('avatar_url') || '/fakeAvatar.png'}
                alt="avatar"
                autoCorrect="true"
                fill
                sizes="120px"
              />
            </ImageContainer>
            <AvatarActionContainer>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: '1rem' }}
                onClick={openUpload}
              >
                Alterar avatar
              </Button>
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>Tamanho máximo: 2mb</Typography>
            </AvatarActionContainer>
          </AvatarSession>
          <FormSession>
            <GridContainer>
              <TextInput
                name="name"
                label="Nome"
                placeholder="Nome"
                required
              />
              <TextInput
                name="username"
                label="login de usuário"
                placeholder="Nome"
                disabled
                required
              />
              <PassInput
                name="password"
                label="Nova senha"
                placeholder="Digite para alterar a senha"
                required
              />
              <PassInput
                name="confirmPassword"
                label="Confirmação da nova senha"
                placeholder="Confirme a nova senha"
                required
              />
              <TextInput
                name="email"
                label="E-mail"
                placeholder="Digite o seu e-mail"
                required
              />
              <Select
                name="role"
                label="Area de Atuação"
                placeholder="Área de atuação"
                value={methods.watch('role')}
                options={mapedRoles || []}
              />
            </GridContainer>
            <TextInput
              name="bio"
              label="Sobre você"
              placeholder="Fale um pouco sobre você e o seu trabalho."
              multiline
              rows={4}
            />
          </FormSession>

        </FormProvider>
      )}
    </AccountTabContainer>
  );
}
