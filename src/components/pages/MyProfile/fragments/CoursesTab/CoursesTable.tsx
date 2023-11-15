import { GridTable } from '@/components/GridTable';
import { useGetCoursesByUser, useSession } from '@/hooks';
import { Edit } from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';
import { DeleteCourseIcon } from './DeleteCourseIcon';

export function CoursesTable() {
  const { user } = useSession();
  const { data, loading } = useGetCoursesByUser(user?.id || '');
  const columns: GridColDef[] = [
    {
      headerName: 'Nome',
      field: 'name',
      minWidth: 200,
      flex: 1,
    },
    {
      headerName: 'Instituição',
      field: 'school',
      minWidth: 200,
      flex: 1,
    },
    {
      headerName: 'Tipo',
      field: 'type',
      width: 200,
    },
    {
      headerName: 'Ações',
      field: 'actions',
      width: 200,
      renderCell: ({ row }) => (
        <Box>
          <IconButton>
            <Edit />
          </IconButton>
          <DeleteCourseIcon
            courseId={row.id}
            userId={user?.id || ''}
          />

        </Box>
      ),
    },

  ];

  return (
    <GridTable
      columns={columns}
      rows={data ?? []}
      loading={loading}
      emptyMessage="Você ainda não possui cursos cadastrados"
    />
  );
}
