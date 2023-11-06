import { Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useMemo } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from '@components/LoginButton';
import { useGetUserByEmail } from '@hooks/useGetUserByEmail';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function Orientation({ isVisible, onNext }:IOrientationProps) {
  const { data, status } = useSession();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const isAuthLoading = status === 'loading';
  const { name, email } = useMemo(() => {
    if (data) {
      return {
        name: data?.user?.name,
        email: data?.user?.email,
      };
    }
    return {
      name: '',
      email: '',
    };
  }, [data]) as {name: string, email: string};

  const { data: userData } = useGetUserByEmail(email);

  const message = useMemo(() => {
    if (name && userData) {
      return `Bem vindo de volta, ${userData.name}! Você já se encontra cadastrado na plataforma. Mas ainda pode usar essa tela 
       para completar o seu perfil
      `;
    }
    if (name) {
      return `Obrigado, ${name}! Agora basta clicar em Continuar para prosseguir com o cadastro`;
    }

    return 'Para começar, vamos confirmar a sua identidade no Github';
  }, [name, userData]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Seja bem-vindo(a)!</StepTitle>
      <StepSubtitle>{message}</StepSubtitle>
      {!name && <LoginButton typeCall="github" isLoading={isAuthLoading} onClick={() => signIn('github')} />}
      <StepContent />
      <ActionsContainer>
        <Button
          fullWidth
          disabled
          variant="outlined"
          color="primary"
        >
          {isMobile ? <ArrowBack /> : 'Voltar' }
        </Button>
        <Button fullWidth disabled={!name} variant="contained" color="primary" onClick={onNext}>
          { userData && !isMobile && 'Completar Pefil' }
          {isMobile && !userData && <ArrowForward />}
          {isMobile && userData && <ArrowForward />}
          {!isMobile && !userData && 'Continuar'}
        </Button>
        {
          userData && (
            <Button fullWidth variant="outlined" color="primary" href="/auth/login">
              Acessar
            </Button>
          )
        }
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
