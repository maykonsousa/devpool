import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useGetJobsByUser, useSession } from '@/hooks';
import { formatDate } from '@/utils';
import { Edit } from '@mui/icons-material';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React, { useMemo } from 'react';
import { DeleteJobDialog } from './deleteJobDialog';

export function JobsTable() {
  const { user } = useSession();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const desktopColumns: GridColDef[] = [
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
      renderCell: ({ value }) => formatDate(value),
    },
    {
      field: 'endDate',
      headerName: 'termino',
      width: 150,
      renderCell: ({ value }) => (value ? formatDate(value) : 'Atual'),
    },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 100,
      sortable: false,
      renderCell: ({ row }) => (
        <Box>
          <IconButton>
            <Edit />
          </IconButton>
          <DeleteJobDialog jobId={row.id} userId={user?.id as string} />
        </Box>
      ),
    },
  ];

  const mobileColumns: GridColDef[] = [
    {
      field: 'company',
      headerName: 'Empresa',
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
          {row.company}
          <Box>
            <IconButton>
              <Edit />
            </IconButton>
            <DeleteJobDialog jobId={row.id} userId={user?.id as string} />
          </Box>
        </Box>
      ),
    },
  ];

  const { data, loading } = useGetJobsByUser({ userId: user?.id });

  const jobs = useMemo(() => data?.jobs, [data]);

  return loading ? (
    <Loading />
  ) : (
    <GridTable
      columns={isMobile ? mobileColumns : desktopColumns}
      loading={loading}
      rows={jobs || []}
      emptyMessage="Voce ainda nao adicionou nenhuma experiencia profissional"
    />
  );
}
