'use client';

import { Box, Typography } from '@mui/material';
import React from 'react';
import { ProfilesFilters } from './ProfilesFilters/ProfilesFilters';
import { ProfilesTable } from './ProfilesTable/ProfilesTable';

interface IFilters {
  roles: string[] | null;
  seniorities: string[] | null;
  states: string[] | null;
  technologies: string[] | null;
  pcd: boolean | null;
  level: string | null;
  language: string | null;
}

const InitialFilters = {
  roles: null,
  seniorities: null,
  states: null,
  technologies: null,
  pcd: null,
  level: null,
  language: null,
};

interface IHandleFilters {
  field:
    | 'roles'
    | 'seniorities'
    | 'states'
    | 'technologies'
    | 'pcd'
    | 'level'
    | 'language';
  value: string[] | boolean | string | null;
}

export function SearchProfile() {
  const [filters, setFilters] = React.useState<IFilters>(InitialFilters);

  const handleFilters = ({ field, value }: IHandleFilters) => {
    setFilters((oldFilters) => ({
      ...oldFilters,
      [field]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        gap: '16px',
        flex: '1 1 auto',
      }}
    >
      <Typography variant="h4">Buscar Perfis</Typography>
      <Typography variant="body1">
        Utilize o filtro para encontrar o profissional ideal
      </Typography>
      <ProfilesFilters onFilter={handleFilters} filters={filters} />
      <ProfilesTable filters={filters} />
    </Box>
  );
}
