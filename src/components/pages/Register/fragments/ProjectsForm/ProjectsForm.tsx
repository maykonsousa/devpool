import React from 'react';
import { Button } from '@mui/material';
import { useSession } from '@/hooks/useSession';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent, StepSubtitle,
} from '../styles';

type IProjectsFormProps = IStepsBaseProps
export function ProjectsForm({ isVisible, onNext, onPrevious }:IProjectsFormProps) {
  const { status } = useSession();
  const isEditing = status === 'authenticated';
  return isVisible ? (
    <StepContainer>
      <StepTitle>Projetos</StepTitle>
      <StepSubtitle>Adicione os projetos que você participou</StepSubtitle>
      <StepContent />
      <ActionsContainer>
        <Button fullWidth disabled={!isEditing} variant="outlined" onClick={onPrevious} color="primary">Voltar</Button>
        <Button fullWidth variant="contained" color="primary" onClick={onNext}>Continuar</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
