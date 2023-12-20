'use client';

import { GridTable } from '@/components/GridTable';
import { useGetLanguagesByUser, useSession } from '@/hooks';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { DeleteLanguageIcon } from './DeleteLanguageIcon';
import { EditLanguageIcon } from './EditLanguageIcon';

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

  const levelEnum = {
    A1: 'A1 - Básico',
    A2: 'A2 - Básico',
    B1: 'B1 - Intermediário',
    B2: 'B2 - Intermediário',
    C1: 'C1 - Avançado',
    C2: 'C2 - Avançado',
  };

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
      valueFormatter: ({ value }) => levelEnum[value as keyof typeof levelEnum],
    },

    {
      headerName: 'Ações',
      field: 'actions',
      width: 200,
      renderCell: ({ row }) => (
        <Box>
          <EditLanguageIcon language={row} />
          <DeleteLanguageIcon languageId={row?.id} />
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
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {row?.name}
          <Box
            sx={{
              display: 'flex',
            }}
          >
            <EditLanguageIcon language={row} />
            <DeleteLanguageIcon languageId={row?.id} />
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
