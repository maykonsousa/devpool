import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetProjectsByUser } from '@/hooks';
import { Loading } from '@/components/Loading';
import { EmptyState } from '@/components/EmptyState';
import { ProjectCard } from './ProjectCard';

interface TabProjectsProps {
  username: string;
}

export function TabProjects({ username }: TabProjectsProps) {
  const theme = useTheme();
  const { data, loading } = useGetProjectsByUser({
    variables: {
      input: {
        username,
      },
    },
  });

  const projects = useMemo(() => data?.projects, [data]) ?? [];

  return (
    <>
      {loading && <Loading />}
      {!loading && !projects.length && (
        <EmptyState
          type="empty"
          message="Ainda não há projetos cadastrados para este usuário"
        />
      )}
      {!loading && projects.length > 0 && (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gridGap: theme.spacing(2),
            padding: theme.spacing(2),
          }}
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project?.name ?? ''}
              resume={project?.description ?? ''}
              image_url={project?.image_url ?? ''}
              deploy_url={project?.deployed_url ?? ''}
              github_url={project?.repo_url ?? ''}
              techs={project?.technologies ?? []}
            />
          ))}
        </Box>
      )}
    </>
  );
}
