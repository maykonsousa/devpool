import React from 'react';
import { Typography } from '@mui/material';
import { useSession } from '@/hooks';
import { CoursesTabContainer } from './CoursesTab.styles';
import { CoursesForm } from './CoursesForm';
import { CoursesTable } from './CoursesTable';

export function CoursesTab() {
  const { user } = useSession();
  const isDeveloper = user && user.type === 'developer';

  return (
    isDeveloper && (
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
        <CoursesTable />
      </CoursesTabContainer>
    )
  );
}
