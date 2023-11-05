import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent, StepSubtitle,
} from '../styles';

type IProjectsFormProps = IStepsBaseProps
export function ProjectsForm({ isVisible, onNext, onPrevious }:IProjectsFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Projetos</StepTitle>
      <StepSubtitle>Adicione os projetos que você participou</StepSubtitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
