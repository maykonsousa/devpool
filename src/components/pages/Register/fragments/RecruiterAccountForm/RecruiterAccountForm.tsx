import { Button } from '@mui/material';
import React from 'react';
import { IStepsBaseProps } from '../types';
import {
  ActionsContainer, StepContainer, StepContent, StepSubtitle, StepTitle,
} from '../styles';

interface IAccountProps extends IStepsBaseProps {
  isVisible: boolean;
}

export function RecruiterAccountForm({ isVisible, onNext, onPrevious }:IAccountProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Informações da Conta</StepTitle>
      <StepSubtitle>Informe os dados abaixo para criar sua conta</StepSubtitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
