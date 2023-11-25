import { Box, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useGetJobsByUser } from '@/hooks';
import { EmptyState } from '@/components/EmptyState';
import { ExperienceCard } from './ExperienceCard';

interface TabExperiencesProps {
  username: string;
}

export function TabExperiences({ username }: TabExperiencesProps) {
  const { data, loading, error } = useGetJobsByUser({ username });
  const jobs = useMemo(() => data?.jobs, [data]) || [];

  const getEmptyState = () => {
    if (data?.status === 'error') {
      return <EmptyState type="error" message={data.message} />;
    }

    if (loading) {
      return <EmptyState type="loading" message="Carregando..." />;
    }

    if (error) {
      return (
        <EmptyState type="error" message="Falha ao recuperar experiências" />
      );
    }

    if (!jobs.length) {
      return (
        <EmptyState type="empty" message="Nenhuma experiência encontrada" />
      );
    }
    return null;
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto',
        padding: '1.5rem',
        width: '100%',
      }}
    >
      <Typography variant="h4" component="h2" gutterBottom>
        Experiências
      </Typography>
      {jobs.length
        ? jobs.map((job) => <ExperienceCard key={job.id} job={job} />)
        : getEmptyState()}
    </Box>
  );
}
