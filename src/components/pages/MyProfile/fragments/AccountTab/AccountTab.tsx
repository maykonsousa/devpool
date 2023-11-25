import {
  IVariables,
  useFeedback,
  useGetRoles,
  useSession,
  useUpdateUser,
  useUpload,
} from '@/hooks';
import { Button, Typography } from '@mui/material';
import React, { useCallback, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Image from 'next/image';
import { Loading } from '@/components/Loading';
import { TextInput } from '@/components/TextInput';
import { PassInput } from '@/components/PassInput';
import { Select } from '@/components/Select';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateDeveloperValidation } from '@/validations/formValidations';
import { CityInput } from '@/components/CityInput';
import { states } from '@/mock/statesMock';
import {
  AccountTabContainer,
  ActionsContainer,
  AvatarActionContainer,
  AvatarSession,
  FormSession,
  GridContainer,
  ImageContainer,
} from './AccountTab.styles';
import { DeleteAccount } from './DeleteAccount';

interface IValues {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  username: string;
  avatar_url: string;
  bio: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
}

const INITIAL_VALUES: IValues = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
  avatar_url: '',
  bio: '',
  role: '',
  seniority: '',
  city: '',
  state: '',
};

const seniorityOptions = [
  { value: 'estagiario', label: 'Estagiário' },
  { value: 'junior', label: 'Júnior' },
  { value: 'pleno', label: 'Pleno' },
  { value: 'senior', label: 'Sênior' },
  { value: 'trainee', label: 'Trainee' },
];

export function AccountTab() {
  const { user, loading, refetch } = useSession();
  const { url, openUpload, onResetAtavarOptions } = useUpload();
  const { data: roles } = useGetRoles();
  const { showMessage } = useFeedback();

  const mapedRoles = roles?.map((role) => ({
    value: role.name,
    label: role.name,
  }));
  const methods = useForm<IValues>({
    defaultValues: INITIAL_VALUES,
    resolver: zodResolver(updateDeveloperValidation),
  });

  const variables: IVariables = {
    input: {
      id: user?.id || '',
      data: {
        name: methods.watch('name'),
        password: methods.watch('password'),
        avatar_url: methods.watch('avatar_url'),
        bio: methods.watch('bio'),
        role: methods.watch('role'),
        seniority: methods.watch('seniority'),
        city: methods.watch('city'),
        state: methods.watch('state'),
      },
    },
  };

  const { updateUser, loading: UpdateLoading } = useUpdateUser(variables);

  const hadleUpdateUser = methods.handleSubmit(async () => {
    const { data } = await updateUser();

    if (data?.updateUser.status === 'success') {
      refetch();
      onResetAtavarOptions();
      showMessage({
        message: 'Dados atualizados com sucesso',
        type: 'success',
      });
    } else {
      showMessage({
        message: 'Falha ao atualizar dados. Tente novamente mais tarde',
        type: 'error',
      });
    }
  });

  const updateAccoutInformations = useCallback(() => {
    if (user) {
      methods.reset({
        name: user.name,
        email: user.email,
        username: user.username,
        avatar_url: user.avatar_url,
        role: user.role,
        bio: user.bio,
        seniority: user.seniority,
        city: user.city,
        state: user.state,
      });
    }
  }, [user, methods]);

  const isLoading = loading || UpdateLoading;

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
      <Typography
        variant="h6"
        sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}
      >
        Informações da conta
      </Typography>
      {isLoading ? (
        <Loading />
      ) : (
        <FormProvider {...methods}>
          <AvatarSession>
            <ImageContainer>
              <Image
                src={methods.watch('avatar_url') || '/fakeAvatar.png'}
                alt="avatar"
                autoCorrect="true"
                fill
                sizes="120px"
                priority
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
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                Tamanho máximo: 2mb
              </Typography>
            </AvatarActionContainer>
          </AvatarSession>
          <FormSession>
            <TextInput name="name" label="Nome" placeholder="Nome" required />
            <GridContainer>
              <Select
                name="role"
                label="Area de Atuação"
                placeholder="Área de atuação"
                value={methods.watch('role')}
                options={mapedRoles || []}
              />
              <Select
                name="seniority"
                label="Senioridade"
                placeholder="Área de atuação"
                value={methods.watch('seniority') || ''}
                options={seniorityOptions || []}
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

              <Select
                name="state"
                label="Estado"
                placeholder="Estado"
                options={states}
                autoComplete="on"
                required
              />
              <CityInput
                errorMessage={methods.formState.errors.city?.message || ''}
                UF={methods.watch('state')}
                onChange={(e, value) => methods.setValue('city', value || '')}
                value={methods.watch('city')}
              />
            </GridContainer>
            <TextInput
              name="bio"
              label="Sobre você"
              placeholder="Fale um pouco sobre você e o seu trabalho."
              multiline
              rows={4}
            />
            <ActionsContainer>
              <Button
                variant="contained"
                color="primary"
                onClick={hadleUpdateUser}
                disabled={methods.formState.isSubmitting}
              >
                Salvar alterações
              </Button>
              <DeleteAccount />
            </ActionsContainer>
          </FormSession>
        </FormProvider>
      )}
    </AccountTabContainer>
  );
}
