import { GridTable } from '@/components/GridTable';
import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

export function JobsTable() {
  const columns:GridColDef[] = [
    {
      field: 'company',
      headerName: 'Empresa',
      width: 200,
      flex: 1,
    },
    {
      field: 'name',
      headerName: 'Cargo',
      width: 200,
      flex: 1,
    },
    {
      field: 'startDate',
      headerName: 'inicio',
      width: 150,
    },
    {
      field: 'endDate',
      headerName: 'termino',
      width: 150,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 100,
      sortable: false,
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

  return (
    <GridTable
      columns={columns}
      rows={[{
        id: 1,
        company: 'Empresa 1',
        name: 'Cargo 1',
        startDate: '01/01/2021',
        endDate: '01/01/2022',
      }]}
      emptyMessage="Voce ainda nao adicionou nenhuma experiencia profissional"

    />
  );
}
