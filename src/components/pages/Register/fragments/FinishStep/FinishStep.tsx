import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent, StepSubtitle,
} from '../styles';

type IProjectsFormProps = IStepsBaseProps
export function FinishStep({ isVisible, onNext, onPrevious }:IProjectsFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Parabéns</StepTitle>
      <StepSubtitle>Agora você faz parte da nossa comunidade de desenvolvedores</StepSubtitle>

      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
