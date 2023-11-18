/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

import React from 'react';
import {
  Box,
  Button,
  CircularProgress,
  DialogActions, DialogContent, DialogTitle, Dialog as MuiDialog, Slide, SlideProps,
} from '@mui/material';
import { FetchResult } from '@apollo/client';

interface IDialogProps {
  elementAction: React.ReactElement;
  children: React.ReactNode;
  title: string;
  onConfirm?: () => Promise<FetchResult<void>>;
  onDismiss?: () => void;
  loading?: boolean;
  confirmText?: string;
  dismissText?: string;
}

const Transition = React.forwardRef((
  props: SlideProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) => <Slide direction="up" ref={ref} {...props} />);

export function Dialog({
  elementAction, children, title, onConfirm, onDismiss, loading,
  confirmText = 'Confirmar', dismissText = 'Cancelar',
}:IDialogProps) {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    handleClose();
    onDismiss?.();
  };

  const handleConfirm = async () => {
    await onConfirm?.();
    handleClose();
  };
  return (
    <>
      {React.cloneElement(elementAction, { onClick: handleOpen })}
      <MuiDialog
        open={open}
        TransitionComponent={Transition}

      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            minHeight: '200px',
            minWidth: '500px',

          }}
        >
          {loading ? <Box><CircularProgress size={92} /></Box> : children}
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCancel}
            color="error"
            variant="outlined"
          >
            {dismissText}
          </Button>
          <Button
            onClick={handleConfirm}
            color="primary"
            variant="contained"
          >
            {confirmText}
          </Button>
        </DialogActions>

      </MuiDialog>
    </>
  );
}
