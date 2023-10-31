import { Box, useTheme } from '@mui/material';
import {
  DataGrid, DataGridProps, GridColDef, GridValidRowModel,
} from '@mui/x-data-grid';
import React from 'react';

interface GridTableProps extends DataGridProps {
  rows: GridValidRowModel[];
  columns: GridColDef[];
}

export function GridTable({ columns, rows }:GridTableProps) {
  const theme = useTheme();
  const headerBackgroundColor = theme.palette.background.paper;

  return (
    <Box sx={{
      display: 'flex',
      flex: 1,
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
        hideFooterSelectedRowCount
        sx={{
          display: 'flex',
          width: '100%',
          flex: 1,

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
