import { Button, useMediaQuery, useTheme } from '@mui/material';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from '@components/LoginButton';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { parseCookies } from 'nookies';
import { IGitHubUser, getGitHubUserByToken } from '@services/getGitHubUserByToken.service';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function Orientation({ isVisible, onNext }:IOrientationProps) {
  const { data, status } = useSession();
  const [githubUser, setGithubUser] = useState<IGitHubUser | null >(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const acessToken = parseCookies().accessToken;

  const getGitHubUser = useCallback(async () => {
    if (acessToken) {
      const user = await getGitHubUserByToken(acessToken);
      setGithubUser(user);
    }
    return null;
  }, [acessToken]);

  const isAuthLoading = status === 'loading';

  const message = useMemo(() => {
    if (data) {
      return `Bem vindo de volta, ${data.user.name}! Você já se encontra cadastrado na plataforma. Mas ainda pode usar essa tela 
       para completar o seu perfil
      `;
    }
    if (githubUser && !data) {
      return 'Agora basta clicar em Continuar para prosseguir com o cadastro';
    }

    return 'Para começar, verificar se já não temos um cadastro seu em nossa plataforma. Para isso, basta clicar no botão abaixo e fazer login com sua conta do GitHub';
  }, [data, githubUser]);

  useEffect(() => {
    getGitHubUser();
  }, [getGitHubUser]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>{`Seja bem-vindo(a) ${githubUser?.name ?? ''}`}</StepTitle>
      <StepSubtitle>{message}</StepSubtitle>
      {!githubUser && !data && <LoginButton typeCall="github" isLoading={isAuthLoading} onClick={() => signIn('github', { redirect: true })} />}
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
        <Button fullWidth disabled={!githubUser && !data} variant="contained" color="primary" onClick={onNext}>
          { !!data && !isMobile && 'Completar Pefil' }
          {isMobile && !data && <ArrowForward />}
          {isMobile && !!data && <ArrowForward />}
          {!isMobile && !data && 'Continuar'}
        </Button>
        {
          data && (
            <Button fullWidth variant="outlined" color="primary" href="/auth/login">
              Acessar
            </Button>
          )
        }
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
