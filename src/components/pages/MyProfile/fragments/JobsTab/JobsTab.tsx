import React from 'react';
import { Typography } from '@mui/material';
import { JobsTabContainer } from './JobsTab.styles';
import { JobsForm } from './JobsForm';
import { JobsTable } from './JobsTable';

export function JobsTab() {
  return (
    <JobsTabContainer>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          marginBottom: '1rem',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Minhas experiências
      </Typography>
      <JobsForm />
      <JobsTable />
    </JobsTabContainer>
  );
}
