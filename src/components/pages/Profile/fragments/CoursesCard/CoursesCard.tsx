import { Card } from '@/components/Card';
import { GridTable } from '@/components/GridTable';
import {
  LinearProgress,
  Skeleton,
  Tooltip,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

interface ICourses {
  id: string;
  type: string;
  name: string;
  school: string;
  progress: number;
}

interface ICoursesCardProps {
  loading?: boolean;
  courses?: ICourses[];
}

export function CoursesCard({ loading, courses }: ICoursesCardProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const columnsDesktop: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Título',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'school',
      headerName: 'Instituição',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'type',
      headerName: 'Tipo',
      width: 150,
    },
    {
      field: 'progress',
      headerName: 'Progresso',
      minWidth: 50,
      flex: 1,
      renderCell: ({ row }) => (
        <Tooltip title={`${row.progress}%`}>
          <LinearProgress
            sx={{ width: '100%', height: '10px' }}
            color="primary"
            variant="determinate"
            value={row.progress}
            content="teste"
          />
        </Tooltip>
      ),
    },
  ];

  const columnsMobile: GridColDef[] = [
    {
      field: 'title',
      headerName: 'Título',
      minWidth: 100,
      flex: 1,
    },
    {
      field: 'progress',
      headerName: 'Progresso',
      minWidth: 50,
      flex: 1,
      renderCell: ({ row }) => (
        <Tooltip title={`${row.progress}%`}>
          <LinearProgress
            sx={{ width: '100%', height: '10px' }}
            color="primary"
            variant="determinate"
            value={row.progress}
            content="teste"
          />
        </Tooltip>
      ),
    },
  ];
  return (
    <Card title="Cursos" sx={{ height: '100%' }}>
      {loading ? (
        <Skeleton width="100%" height={400} />
      ) : (
        <GridTable
          columns={isMobile ? columnsMobile : columnsDesktop}
          rows={
            courses?.map((course) => ({
              id: course.id,
              type: course.type,
              title: course.name,
              school: course.school,
              progress: course.progress,
            })) || []
          }
          emptyMessage="Usuário ainda não incluiu cursos"
        />
      )}
    </Card>
  );
}
