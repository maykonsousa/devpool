import React, { useContext } from 'react';
import { Alert, Snackbar as MuiSnackbar } from '@mui/material';
import { appContext } from '@/contexts/AppContext';

export function Snackbar() {
  const { closeSnackbar, snackbarOptions } = useContext(appContext);
  const { message, type } = snackbarOptions;
  return (
    <MuiSnackbar
      open={snackbarOptions.isVisible}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert onClose={closeSnackbar} severity={type} sx={{ width: '100%' }}>
        {message}
      </Alert>
    </MuiSnackbar>
  );
}
