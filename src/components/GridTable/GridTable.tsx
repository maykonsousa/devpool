import { Box, useTheme } from '@mui/material';
import {
  DataGrid,
  DataGridProps,
  GridColDef,
  GridValidRowModel,
  GridLocaleText,
} from '@mui/x-data-grid';
import React from 'react';

interface GridTableProps extends DataGridProps {
  rows: GridValidRowModel[];
  columns: GridColDef[];
  emptyMessage?: string;
}

export function GridTable({ columns, rows, emptyMessage }: GridTableProps) {
  const theme = useTheme();
  const headerBackgroundColor = theme.palette.background.paper;

  const customLocaleText: Partial<GridLocaleText> = {
    noRowsLabel: `${emptyMessage || 'Nenhum registro encontrado'}`,
    MuiTablePagination: {
      labelRowsPerPage: 'Registros por página',
      labelDisplayedRows: ({ from, to, count }) =>
        `${from}-${to} de ${count !== -1 ? count : `mais de ${to}`}`,
    },
  };

  return (
    <Box
      sx={{
        display: 'flex',
        overflow: 'auto',
        width: '100%',
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableColumnMenu
        disableColumnSelector
        pagination
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5 },
          },
        }}
        localeText={customLocaleText}
        sx={{
          'display': 'flex',
          'width': '100%',
          'flex': 1,

          '& .MuiDataGrid-columnHeader, MuiDataGrid-cell': {
            backgroundColor: headerBackgroundColor,
            fontWeight: 'bold',
          },
          '& .MuiDataGrid-columnHeaderTitle': {
            color: theme.palette.primary.contrastText,
            fontWeight: 'bold',
            textTransform: 'uppercase',
          },
        }}
      />
    </Box>
  );
}
