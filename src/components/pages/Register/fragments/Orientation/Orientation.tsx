import { Button } from '@mui/material';
import React, { useMemo } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { LoginButton } from '@/components/LoginButton';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';

interface IOrientationProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function Orientation({ isVisible, onNext }:IOrientationProps) {
  const { data, status } = useSession();
  const isAuthLoading = status === 'loading';
  const name = data?.user?.name;

  const message = useMemo(() => {
    if (name) {
      return `Obrigado, ${name}! Agora basta clicar em Continuar para prosseguir com o cadastro`;
    }
    return 'Para começar, vamos confirmar a sua identidade no Github';
  }, [name]);

  return isVisible ? (
    <StepContainer>
      <StepTitle>Seja bem-vindo(a)!</StepTitle>
      <StepSubtitle>{message}</StepSubtitle>
      {!name && <LoginButton typeCall="github" isLoading={isAuthLoading} onClick={() => signIn('github')} />}
      <StepContent />
      <ActionsContainer>
        <Button fullWidth disabled variant="outlined" color="primary">Voltar</Button>
        <Button fullWidth disabled={!name} variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
