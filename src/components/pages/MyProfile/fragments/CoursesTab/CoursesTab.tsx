import React from 'react';
import { Typography } from '@mui/material';
import { CoursesTabContainer } from './CoursesTab.styles';
import { CoursesForm } from './CoursesForm';

export function CoursesTab() {
  return (
    <CoursesTabContainer>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          marginBottom: '1rem',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Meus cursos
      </Typography>
      <CoursesForm />
    </CoursesTabContainer>
  );
}
