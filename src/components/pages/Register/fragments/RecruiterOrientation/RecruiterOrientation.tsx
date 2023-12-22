import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { useGetLinkedinUser } from '@/hooks';
import { LoginButton } from '@/components/LoginButton';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer,
  StepContainer,
  StepContent,
  StepSubtitle,
  StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function RecruiterOrientation({ isVisible, onNext }: IOrientationProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const params = useSearchParams();

  const accessToken = params.get('accessToken') || '';
  const { status, data: session } = useSession();
  const { data: LinkedinUserData } = useGetLinkedinUser({
    variables: { input: { token: accessToken } },
  });
  const isLoading = status === 'loading';

  const recruiterData = useMemo(
    () => LinkedinUserData?.linkedinUserData,
    [LinkedinUserData],
  );

  const generateMessage = () => {
    if (!recruiterData?.email && !session?.user) {
      return 'Para se inscrever como recrutador, clique no botão abaixo e faça login com o Linkedin';
    }
    if (session?.user) {
      return 'Você já se encontra cadastrado em nossa plataforma. Click no botão abaixo para acessar';
    }
    return 'Agora basta clicar em Continuar para finalizar seu cadastro';
  };

  return isVisible ? (
    <StepContainer>
      <StepTitle>{`Seja bem-vindo(a) ${
        recruiterData?.name || session?.user?.name || ''
      }`}</StepTitle>
      <StepContent>
        <StepSubtitle>{generateMessage()}</StepSubtitle>
        {!recruiterData?.email && !session?.user && (
          <LoginButton
            typeCall="linkedin"
            onClick={() => signIn('linkedin', { redirect: true })}
            isLoading={isLoading}
          />
        )}
      </StepContent>
      <ActionsContainer>
        <Button fullWidth disabled variant="outlined" color="primary">
          Voltar
        </Button>
        {session?.user ? (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            href="/auth/login"
          >
            Acessar plataforma
          </Button>
        ) : (
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={onNext}
            disabled={!recruiterData}
          >
            Continuar
          </Button>
        )}
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
