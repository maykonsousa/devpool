import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useSearchProfiles } from '@/hooks';
import { seniorityAbbreviations, seniorityOptions } from '@/mock/generalMocks';
import { Visibility } from '@mui/icons-material';
import {
  Avatar,
  Button,
  IconButton,
  Link,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

interface IFilters {
  roles: string[] | null;
  seniorities: string[] | null;
  states: string[] | null;
  technologies: string[] | null;
}

interface IProfilesTableProps {
  filters: IFilters;
}

export function ProfilesTable({ filters }: IProfilesTableProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { data, loading } = useSearchProfiles({
    variables: {
      input: {
        filters,
      },
    },
  });

  const profiles = data?.users || [];

  const desktopColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      renderCell: ({ row }) => (
        <Link
          href={`/profile/${row.username}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          underline="none"
          color="inherit"
        >
          <Avatar
            src={row.avatar_url}
            sx={{ width: 32, height: 32, marginRight: 1 }}
            alt={row.name}
            title={row.name}
          />
          {row.name}
        </Link>
      ),
    },
    { field: 'role', headerName: 'Atuação', width: 200 },
    {
      field: 'seniority',
      headerName: 'Senioridade',
      width: 150,
      renderCell: ({ row }) => {
        const seniority = seniorityOptions.find(
          (option) => option.value === row.seniority,
        );

        return seniority?.label;
      },
    },
    {
      field: 'state',
      headerName: 'UF',
      width: 80,
    },
    {
      field: 'city',
      headerName: 'Cidade',
      width: 200,
    },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 200,
      renderCell: ({ row }) => (
        <Button
          href={`/profile/${row.username}`}
          variant="contained"
          color="primary"
        >
          ver perfil
        </Button>
      ),
    },
  ];

  const mobileColumns: GridColDef[] = [
    {
      field: 'name',
      headerName: 'Nome',
      flex: 1,
      renderCell: ({ row }) => (
        <Link
          href={`/profile/${row.username}`}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
          underline="none"
          color="inherit"
        >
          <Avatar
            src={row.avatar_url}
            sx={{ width: 32, height: 32, marginRight: 1 }}
            alt={row.name}
            title={row.name}
          />
          {row.name.split(' ')[0]}
        </Link>
      ),
    },
    {
      field: 'role',
      headerName: 'Atuação',
      width: 100,
      renderCell: ({ row }) =>
        `${row.role}/${
          seniorityAbbreviations[
            row.seniority as keyof typeof seniorityAbbreviations
          ]
        }`,
    },
    { field: 'state', headerName: 'UF', width: 50 },
    {
      field: 'actions',
      headerName: 'Ações',
      width: 80,
      renderCell: ({ row }) => (
        <IconButton href={`/profile/${row.username}`} color="primary">
          <Visibility />
        </IconButton>
      ),
    },
  ];

  return loading ? (
    <Loading />
  ) : (
    <GridTable
      columns={isMobile ? mobileColumns : desktopColumns}
      rows={profiles}
      rowsPerPage={isMobile ? 5 : 10}
    />
  );
}
