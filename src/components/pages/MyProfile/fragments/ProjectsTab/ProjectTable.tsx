'use client';

import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useGetProjectsByUser, useSession } from '@/hooks';
import { GitHub, Language } from '@mui/icons-material';
import {
  Box, IconButton, useMediaQuery, useTheme,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useMemo } from 'react';
import { DeleteProjectIcon } from './DeleteProjectIcon';

export function ProjectTable() {
  const { user } = useSession();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { data, loading } = useGetProjectsByUser({
    variables: {
      input: {
        userId: user?.id,
      },
    },
  });

  const projects = useMemo(() => data?.projects, [data]) ?? [];
  const deskTopColumns:GridColDef[] = [
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

  const mobileColumns:GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {row.name}
          <Box>
            <IconButton disabled={!row.repo_url} href={row?.repo_url ?? undefined} target="_blank">
              <GitHub />
            </IconButton>
            <IconButton disabled={!row.deployed_url} href={row?.deployed_url ?? undefined} target="_blank">
              <Language />
            </IconButton>

          </Box>
        </Box>
      ),
    },

  ];
  return loading ? (
    <Loading />
  ) : (
    <GridTable
      columns={isMobile ? mobileColumns : deskTopColumns}
      rows={projects}
      loading={loading}
      emptyMessage="Você ainda não possui projetos"
    />
  );
}
