import { Button, useMediaQuery, useTheme } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from '@components/LoginButton';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import {
  IGitHubUser,
  getGitHubUserByToken,
} from '@services/getGitHubUserByToken.service';
import { useSearchParams } from 'next/navigation';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer,
  StepContainer,
  StepSubtitle,
  StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function Orientation({ isVisible, onNext }: IOrientationProps) {
  const { data, status } = useSession();
  const [githubUser, setGithubUser] = useState<IGitHubUser | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const params = useSearchParams();

  const accessToken = params.get('accessToken');

  const getGitHubUser = useCallback(async () => {
    if (accessToken) {
      const user = await getGitHubUserByToken(`${accessToken}`);
      setGithubUser(user);
    }
  }, [accessToken]);

  const isAuthLoading = status === 'loading';

  const message = useMemo(() => {
    if (data) {
      return `Localizamos o seu cadastro na nossa plataforma com o username ${data.user.name},\r\n
      Acesse a área locada no botão abaixo em seguida clique em sua foto e complete o seu perfil.
      `;
    }
    if (githubUser && !data) {
      return 'Agora basta clicar em Continuar para prosseguir com o cadastro';
    }

    return 'Para se inscrever como desenvolvedor, clique no botão abaixo e faça login com o GitHub';
  }, [data, githubUser]);

  const title = useMemo(() => {
    if (data) {
      return 'Perfil localizado!!';
    }
    if (githubUser && !data) {
      return `Obrigado ${githubUser?.name ?? ''}!`;
    }

    return 'Olá, seja bem-vindo(a)';
  }, [data, githubUser]);

  useEffect(() => {
    getGitHubUser();
  }, [getGitHubUser]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>{title}</StepTitle>
      <StepSubtitle>{message}</StepSubtitle>
      {!githubUser && !data && (
        <LoginButton
          typeCall="github"
          isLoading={isAuthLoading}
          onClick={() => signIn('github', { redirect: true })}
        />
      )}
      <ActionsContainer>
        <Button fullWidth disabled variant="outlined" color="primary">
          {isMobile ? <ArrowBack /> : 'Voltar'}
        </Button>
        {!data ? (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            disabled={!githubUser}
            onClick={onNext}
          >
            {isMobile ? <ArrowForward /> : 'Continuar'}
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href="/auth/login"
          >
            Acessar
          </Button>
        )}
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
