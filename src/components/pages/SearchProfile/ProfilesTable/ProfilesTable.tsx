import { GridTable } from '@/components/GridTable';
import { Loading } from '@/components/Loading';
import { useSearchProfiles } from '@/hooks';
import { seniorityOptions } from '@/mock/generalMocks';
import { Avatar, Button, Link } from '@mui/material';
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
  const { data, loading } = useSearchProfiles({
    variables: {
      input: {
        filters,
      },
    },
  });

  const profiles = data?.users || [];

  const columns: GridColDef[] = [
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
          />
          {row.name}
        </Link>
      ),
    },
    { field: 'role', headerName: 'Atuação', width: 200 },
    {
      field: 'seniority',
      headerName: 'Senioridade',
      width: 200,
      renderCell: ({ row }) => {
        const seniority = seniorityOptions.find(
          (option) => option.value === row.seniority,
        );

        return seniority?.label;
      },
    },
    {
      field: 'state',
      headerName: 'Cidade/UF',
      width: 200,
      renderCell: ({ row }) => `${row.city}/${row.state}`,
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

  return loading ? (
    <Loading />
  ) : (
    <GridTable columns={columns} rows={profiles} rowsPerPage={10} />
  );
}
