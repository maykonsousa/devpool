import { Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from '@components/LoginButton';
import { useGetUserByEmail } from '@hooks/useGetUserByEmail';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { appContext } from '@/contexts/AppContext';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function Orientation({ isVisible, onNext }:IOrientationProps) {
  const { data, status } = useSession();
  const { githubUser } = useContext(appContext);
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
    if (githubUser && userData) {
      return `Bem vindo de volta, ${userData.name}! Você já se encontra cadastrado na plataforma. Mas ainda pode usar essa tela 
       para completar o seu perfil
      `;
    }
    if (githubUser && !data) {
      return `Obrigado, ${githubUser.name}! Agora basta clicar em Continuar para prosseguir com o cadastro`;
    }

    return 'Para começar, verificar se já não temos um cadastro seu em nossa plataforma. Para isso, basta clicar no botão abaixo e fazer login com sua conta do GitHub';
  }, [userData, data, githubUser]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Seja bem-vindo(a)!</StepTitle>
      <StepSubtitle>{message}</StepSubtitle>
      {!githubUser && <LoginButton typeCall="github" isLoading={isAuthLoading} onClick={() => signIn('github', { redirect: true })} />}
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
