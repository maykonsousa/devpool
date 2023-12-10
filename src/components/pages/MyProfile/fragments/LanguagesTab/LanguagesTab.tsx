import React from 'react';
import { Typography } from '@mui/material';
import { LanguagesForm } from './LanguagesForm';
import { LanguagesTable } from './LanguagesTable';
import { LanguagesTabContainer } from './LanguagesTab.styles';

export function LanguagesTab() {
  return (
    <LanguagesTabContainer>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          marginBottom: '1rem',
          width: '100%',
          textAlign: 'center',
        }}
      >
        Meus Idiomas
      </Typography>
      <LanguagesForm />
      <LanguagesTable />
    </LanguagesTabContainer>
  );
}
