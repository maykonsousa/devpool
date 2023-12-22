import React from 'react';
import { Typography } from '@mui/material';
import { useSession } from '@/hooks';
import { JobsTabContainer } from './JobsTab.styles';
import { JobsForm } from './JobsForm';
import { JobsTable } from './JobsTable';

export function JobsTab() {
  const { user } = useSession();
  const isDeveloper = user && user.type === 'developer';

  return (
    isDeveloper && (
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
    )
  );
}
