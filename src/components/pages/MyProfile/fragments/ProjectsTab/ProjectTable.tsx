import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useGetProjectsByUser, useSession } from '@/hooks';
import { GitHub, Language } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { DeleteProjectIcon } from './DeleteProjectIcon';

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
      renderCell: ({ row }) => (
        <Box>
          <IconButton disabled={!row.repo_url} href={row?.repo_url ?? undefined} target="_blank">
            <GitHub />
          </IconButton>
          <IconButton disabled={!row.deployed_url} href={row?.deployed_url ?? undefined} target="_blank">
            <Language />
          </IconButton>

        </Box>
      ),
    },

    {
      field: 'actions',
      headerName: 'Ações',
      renderCell: ({ row }) => (

        <DeleteProjectIcon projectId={row?.id} />

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
