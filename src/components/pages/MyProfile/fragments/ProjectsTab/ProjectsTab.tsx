import React from 'react';
import { Typography } from '@mui/material';
import { ProjectsTabContainer } from './ProjectsTab.styles';
import { ProjectTable } from './ProjectTable';
import { ProjectForm } from './ProjectForm';

export function ProjectsTab() {
  return (
    <ProjectsTabContainer>
      <Typography variant="h6" sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}>Meus projetos</Typography>
      <ProjectForm />
      <ProjectTable />
    </ProjectsTabContainer>
  );
}
