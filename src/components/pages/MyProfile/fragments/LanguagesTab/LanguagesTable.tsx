'use client';

import { GridTable } from '@/components/GridTable';
import { useGetLanguagesByUser, useSession } from '@/hooks';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { Delete, Edit } from '@mui/icons-material';

export function LanguagesTable() {
  const { user } = useSession();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { data, loading } = useGetLanguagesByUser({
    variables: {
      input: {
        userId: user?.id,
      },
    },
  });

  const rows = data?.languages || [];
  const deskTopColumns: GridColDef[] = [
    {
      headerName: 'Idioma',
      field: 'name',
      minWidth: 200,
      flex: 1,
    },
    {
      headerName: 'Nível',
      field: 'level',
      minWidth: 200,
      flex: 1,
    },

    {
      headerName: 'Ações',
      field: 'actions',
      width: 200,
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

  const mobileColumns: GridColDef[] = [
    {
      headerName: 'Nome',
      field: 'name',
      flex: 1,
      renderCell: ({ row }) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {row?.name}
          <Box>
            <IconButton>
              <Edit />
            </IconButton>
            <IconButton>
              <Delete />
            </IconButton>
          </Box>
        </Box>
      ),
    },
  ];

  return (
    <GridTable
      columns={isMobile ? mobileColumns : deskTopColumns}
      rows={rows}
      loading={loading}
      emptyMessage="Você ainda não adicionou nenhum idioma."
    />
  );
}
