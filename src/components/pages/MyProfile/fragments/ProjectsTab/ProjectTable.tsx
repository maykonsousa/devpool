import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useGetProjectsByUser, useSession } from '@/hooks';
import {
  GitHub, Language, Edit, Delete,
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

export function ProjectTable() {
  const { user } = useSession();
  const { data, loading } = useGetProjectsByUser(user?.id || '');
  const columns:GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
    },
    {
      field: 'access',
      headerName: 'Acessos',
      renderCell: () => (
        <Box>
          <IconButton>
            <GitHub />
          </IconButton>
          <IconButton>
            <Language />
          </IconButton>

        </Box>
      ),
    },

    {
      field: 'actions',
      headerName: 'Ações',
      renderCell: () => (
        <Box>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
        </Box>
      ),
    },

  ];
  return loading ? (
    <Loading />
  ) : (
    <GridTable
      columns={columns}
      rows={data}
      loading={loading}
      emptyMessage="Você ainda não possui projetos"
    />
  );
}
