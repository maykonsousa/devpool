import React, { useMemo } from 'react';
import { Box, useTheme } from '@mui/material';
import { useGetProjectsByUser } from '@/hooks';
import { Loading } from '@/components/Loading';
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

  return loading ? (<Loading />) : (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '1rem',
        width: '100%',
        padding: '1rem 0',
        [theme.breakpoints.down('md')]: {
          padding: '1rem',
          alignContent: 'center',
          justifyContent: 'center',
        },
      }}
    >

      { projects.map((project) => (
        <ProjectCard
          key={project.id}
          name={project.name}
          image_url={project.image_url}
          deploy_url={project.deployed_url}
          github_url={project.repo_url}
          techs={project.technologies}
          resume={project.description}
        />

      ))}

    </Box>
  );
}
