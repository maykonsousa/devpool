'use client';

import { GridTable } from '@/components/GridTable';
import { useGetCoursesByUser, useSession } from '@/hooks';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import React from 'react';
import { ICourseData } from '@/app/api/types/CousersTypes';
import { DeleteCourseIcon } from './DeleteCourseIcon';
import { UpdateCourseDialog } from './UpdateCourseDialog';

export function CoursesTable() {
  const { user } = useSession();
  const { data, loading } = useGetCoursesByUser(user?.id || '');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const deskTopColumns: GridColDef[] = [
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
      maxWidth: 200,
    },
    {
      headerName: 'Ações',
      field: 'actions',
      width: 200,
      renderCell: ({ row }: GridRenderCellParams<ICourseData>) => (
        <Box>
          <UpdateCourseDialog course={row} userId={user?.id as string} />
          <DeleteCourseIcon
            courseId={row.id}
            userId={user?.id || ''}
          />

        </Box>
      ),
    },

  ];

  const mobileColumns: GridColDef[] = [
    {
      headerName: 'Nome',
      field: 'name',
      flex: 1,
      renderCell: ({ row }: GridRenderCellParams<ICourseData>) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          {row.name}
          <Box>
            <UpdateCourseDialog course={row} userId={user?.id as string} />
            <DeleteCourseIcon
              courseId={row.id}
              userId={user?.id || ''}
            />

          </Box>
        </Box>
      ),

    },

  ];

  return (

    <GridTable
      columns={isMobile ? mobileColumns : deskTopColumns}
      rows={data ?? []}
      loading={loading}
      emptyMessage="Você ainda não possui cursos cadastrados"
    />

  );
}
