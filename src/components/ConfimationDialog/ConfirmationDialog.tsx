'use client';

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  useTheme,
} from '@mui/material';
import React from 'react';
import { Loading } from '../Loading';

interface IConfirmationDialogProps {
  title: string;
  description: string;
  buttonLabel?: string;
  type: 'danger' | 'info';
  onConfirm: () => void;
  onCancel?: () => void;
  loading?: boolean;
  elementAction?: React.ReactElement;
}

export function ConfirmationDialog({
  buttonLabel,
  description,
  onConfirm,
  onCancel,
  type = 'danger',
  title,
  loading,
  elementAction,
}: IConfirmationDialogProps) {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    if (onCancel) onCancel();
  };
  const handleConfirm = () => {
    setOpen(false);
    onConfirm();
  };
  return (
    <>
      {elementAction &&
        React.cloneElement(elementAction, { onClick: handleOpen })}
      {!elementAction && (
        <Button
          onClick={handleOpen}
          variant="contained"
          color={type === 'danger' ? 'error' : 'primary'}
        >
          {buttonLabel || 'Confirmar'}
        </Button>
      )}
      <Dialog
        open={open}
        sx={{
          '& .MuiDialog-paper': {
            borderRadius: '8px',
            backgroundColor: theme.palette.background.default,
            minWidth: '400px',
          },
        }}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          {loading ? (
            <Loading />
          ) : (
            <DialogContentText>{description}</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            variant="outlined"
            color="primary"
            sx={{
              '&:hover': {
                backgroundColor: theme.palette.secondary.main,
                color: theme.palette.secondary.contrastText,
              },
            }}
          >
            Cancelar
          </Button>
          <Button
            onClick={handleConfirm}
            variant="contained"
            color={type === 'danger' ? 'error' : 'primary'}
            autoFocus
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
