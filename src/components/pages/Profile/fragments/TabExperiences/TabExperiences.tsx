import { Box, Typography } from '@mui/material';
import React from 'react';
import { ExperienceCard } from './ExperienceCard';

export function TabExperiences() {
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
      <ExperienceCard />
      <ExperienceCard />
      <ExperienceCard />
    </Box>
  );
}
