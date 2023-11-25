import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetProjectsByUser } from '@/hooks';
import { EmptyState } from '@/components/EmptyState';
import { ProjectCard } from './ProjectCard';

interface TabProjectsProps {
  username: string;
}

export function TabProjects({ username }: TabProjectsProps) {
  const theme = useTheme();
  const { data, loading, error } = useGetProjectsByUser({
    variables: {
      input: {
        username,
      },
    },
  });

  const projects = useMemo(() => data?.projects, [data]) ?? [];

  const getEmptyState = () => {
    if (data?.status === 'error') {
      return <EmptyState type="error" message={data.message} />;
    }

    if (loading) {
      return <EmptyState type="loading" message="Carregando..." />;
    }

    if (error) {
      return <EmptyState type="error" message="Falha ao recuperar projetos" />;
    }

    if (!projects.length) {
      return (
        <EmptyState
          type="empty"
          message="Ainda não há projetos cadastrados para este uduário"
        />
      );
    }
    return null;
  };

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gridGap: theme.spacing(2),
        padding: theme.spacing(2),
      }}
    >
      {projects.length
        ? projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project?.name ?? ''}
              resume={project?.description ?? ''}
              image_url={project?.image_url ?? ''}
              deploy_url={project?.deployed_url ?? ''}
              github_url={project?.repo_url ?? ''}
              techs={project?.technologies ?? []}
            />
          ))
        : getEmptyState()}
    </Box>
  );
}
