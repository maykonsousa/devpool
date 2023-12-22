import React from 'react';
import { Typography } from '@mui/material';
import { useSession } from '@/hooks';
import { ProjectsTabContainer } from './ProjectsTab.styles';
import { ProjectTable } from './ProjectTable';
import { ProjectForm } from './ProjectForm';

export function ProjectsTab() {
  const { user } = useSession();
  const isDeveloper = user && user.type === 'developer';

  return (
    isDeveloper && (
      <ProjectsTabContainer>
        <Typography
          variant="h6"
          sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}
        >
          Meus projetos
        </Typography>
        <ProjectForm />
        <ProjectTable />
      </ProjectsTabContainer>
    )
  );
}
