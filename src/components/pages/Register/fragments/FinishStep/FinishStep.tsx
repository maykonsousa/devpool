import React from 'react';
import { Button } from '@mui/material';
import { IStepsBaseProps } from '../types';
import {
  StepContainer, StepTitle, ActionsContainer, StepContent, StepSubtitle,
} from '../styles';

type IProjectsFormProps = IStepsBaseProps
export function FinishStep({ isVisible }:IProjectsFormProps) {
  return isVisible ? (
    <StepContainer>
      <StepTitle>Parabéns</StepTitle>
      <StepSubtitle>Agora você faz parte da nossa comunidade de desenvolvedores</StepSubtitle>

      <StepContent>
        <StepSubtitle>
          Para uma melhor experiência, ao acessar a plataforma, clique na sua
          foto e em seguida, editar meu perfil para adicionar informações como tecnologias que atua,
          cursos, experiências, projetos e contatos.
        </StepSubtitle>
        <StepSubtitle>
          Quanto mais completo for o seu perfil, maiores as chances de ser convidado(a)
          para processos seletivos

        </StepSubtitle>
      </StepContent>
      <ActionsContainer>
        <Button fullWidth variant="contained" color="primary" href="/community">Acessar plataforma</Button>
      </ActionsContainer>
    </StepContainer>
  ) : null;
}
