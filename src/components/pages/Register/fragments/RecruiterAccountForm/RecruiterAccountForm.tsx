/* eslint-disable camelcase */
import { Box, Button } from '@mui/material';
import React, { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { creteRecruiterValidation } from '@/validations/userFormValidations';
import { useSearchParams } from 'next/navigation';
import {
  useCreateUser,
  useFeedback,
  useGetLinkedinUser,
  useSession,
  useUpload,
} from '@/hooks';
import { formatName } from '@/utils';
import { EmptyState } from '@/components/EmptyState';
import { Loading } from '@/components/Loading';
import { PassInput } from '@/components/PassInput';
import { TextInput } from '@/components/TextInput';
import Image from 'next/image';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer,
  StepContainer,
  StepContent,
  StepSubtitle,
  StepTitle,
} from '../styles';
import {
  FormContainer,
  AvatarContainer,
  GridContainer,
} from './RecruiterAccountForm.styles';

interface IAccountProps extends IStepsBaseProps {
  isVisible: boolean;
  onNext: () => void;
}

type UserType = 'admin' | 'developer' | 'recruiter';

interface IFormValues {
  name: string;
  email: string;
  type: UserType;
  username: string;
  current_company?: string;
  bio: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
  avatar_url: string;
  cover_url: string;
  password: string;
  confirmPassword: string;
}

const INITIAL_VALUES: IFormValues = {
  name: '',
  email: '',
  type: 'recruiter',
  current_company: '',
  username: '',
  bio: '',
  avatar_url: '',
  cover_url: '',
  password: '',
  role: '',
  seniority: '',
  city: '',
  state: '',
  confirmPassword: '',
};

export function RecruiterAccountForm({
  isVisible,
  onNext,
  onPrevious,
}: IAccountProps) {
  const { status } = useSession();
  const methods = useForm<IFormValues>({
    defaultValues: INITIAL_VALUES,
    resolver: zodResolver(creteRecruiterValidation),
  });
  const params = useSearchParams();
  const token = params.get('accessToken') || '';
  const { data } = useGetLinkedinUser({ variables: { input: { token } } });
  const { url, openUpload } = useUpload();
  const { showMessage } = useFeedback();

  const updateFormValues = useCallback(() => {
    if (!data) return;

    const { name, email, picture } = data.linkedinUserData;

    methods.setValue('name', name);
    methods.setValue('email', email);
    methods.setValue('avatar_url', picture);
  }, [data, methods]);

  const {
    createUser,
    loading: createuserLoading,
    error,
  } = useCreateUser({
    input: {
      name: formatName(methods.watch('name')),
      email: methods.watch('email'),
      type: 'recruiter',
      current_company: methods.watch('current_company'),
      username: methods.watch('email'),
      avatar_url: methods.watch('avatar_url'),
      cover_url: methods.watch('cover_url'),
      password: methods.watch('password'),
      role: 'Tech Recruiter',
      seniority: 'pleno',
      city: methods.watch('city'),
      state: methods.watch('state'),
      bio: methods.watch('bio'),
      pcd: false,
    },
  });

  const isLogged = status === 'authenticated';
  const isLoading = createuserLoading || status === 'loading';
  const avatar_url = methods.watch('avatar_url');

  const onSubmit = methods.handleSubmit(async () => {
    const { data: createUserData } = await createUser();
    if (error || !createUserData) {
      showMessage({
        message: 'Falha ao criar usuário',
        type: 'error',
      });
    }
    showMessage({
      message: createUserData?.createUser.message as string,
      type: createUserData?.createUser.status as 'success' | 'error',
    });

    if (createUserData?.createUser.status === 'success') {
      onNext();
    }
  });

  React.useEffect(() => {
    if (url) {
      methods.setValue('avatar_url', url);
    }
  }, [url, methods]);

  React.useEffect(() => {
    updateFormValues();
  }, [updateFormValues]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Informações da Conta</StepTitle>
      <StepSubtitle>Informe os dados abaixo para criar sua conta</StepSubtitle>
      <StepContent>
        {isLoading && <Loading />}
        {!isLoading && !isLogged && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <FormProvider {...methods}>
              <FormContainer>
                <AvatarContainer>
                  <Image
                    src={avatar_url || '/avatar.svg'}
                    width={120}
                    height={120}
                    alt="avatar"
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={openUpload}
                  />
                </AvatarContainer>
                <GridContainer>
                  <TextInput name="name" label="Nome" required />
                  <TextInput name="current_company" label="Empresa" required />
                  <PassInput name="password" label="Senha" required />
                  <PassInput label="Confirmar senha" name="confirmPassword" />
                </GridContainer>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    width: '100%',
                  }}
                />
                <TextInput name="email" label="E-mail" disabled />
              </FormContainer>
            </FormProvider>
          </Box>
        )}
        {!isLoading && isLogged && (
          <EmptyState
            type="success"
            message="Etapa concluída. Continue para prosseguir com o cadastro"
          />
        )}
      </StepContent>
      <ActionsContainer>
        <Button
          fullWidth
          variant="outlined"
          onClick={onPrevious}
          color="primary"
        >
          Voltar
        </Button>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={onSubmit}
        >
          Continuar
        </Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
