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
        gridTemplateColumns: loading
          ? '1fr'
          : 'repeat(auto-fill, minmax(300px, 1fr))',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(2),
        gap: theme.spacing(2),
        width: '100%',
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
