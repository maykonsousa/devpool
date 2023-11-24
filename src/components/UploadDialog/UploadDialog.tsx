/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */

'use client';

import { appContext } from '@/contexts/AppContext';
import { storage } from '@/firebase';
import { Close } from '@mui/icons-material';
import { v4 as uuidV4 } from 'uuid';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Input,
  LinearProgress,
  Slide,
  SlideProps,
  Typography,
  useTheme,
} from '@mui/material';
import {
  ref as fireBaseRef,
  getDownloadURL,
  uploadBytesResumable,
} from 'firebase/storage';
import Image from 'next/image';
import React, { useContext, useRef, useState } from 'react';
import { useFeedback } from '@/hooks';

const Transition = React.forwardRef(
  (
    props: SlideProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
  ) => <Slide direction="up" ref={ref} {...props} />,
);

export function UploadDialog() {
  const { avatarUploadOptions, onChangeAtavarOptions, onResetAtavarOptions } =
    useContext(appContext);
  const [image, setImage] = React.useState(
    'https://firebasestorage.googleapis.com/v0/b/devpool-110a7.appspot.com/o/image%201.png?alt=media&token=8dc348ff-1eae-43b0-a4c5-6d2ed3cf2238&_gl=1*1uoht8v*_ga*MjA5NjU0OTE3MC4xNjk4NjgyNTA0*_ga_CW55HF8NVT*MTY5OTIzMzA0NC40LjEuMTY5OTIzMzQ4Ny40OS4wLjA.',
  );
  const [file, setFile] = useState<Blob | Uint8Array | ArrayBuffer | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string>('');
  const theme = useTheme();
  const { showMessage } = useFeedback();
  const inputRef = useRef<HTMLInputElement>(null);
  const uuid = uuidV4();

  const handleImageClick = () => {
    inputRef.current?.click();
  };

  const handleClose = () => {
    onResetAtavarOptions();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileUploaded = e?.target?.files?.[0];
    if (!fileUploaded || !fileUploaded.type.startsWith('image/')) {
      setErrorMessage('Selecione um arquivo válido');
      return;
    }
    // image size validation > 2mb
    if (fileUploaded.size > 2 * 1024 * 1024) {
      setErrorMessage('A imagem deve ter no máximo 2mb');
      return;
    }
    setErrorMessage('');
    setFile(fileUploaded);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(`${reader.result}`);
    };
    reader.readAsDataURL(fileUploaded);
  };

  const handleUpload = () => {
    // upload firebase
    const storageRef = fireBaseRef(storage, `images/${uuid}`);
    const uploadTask = uploadBytesResumable(
      storageRef,
      file as Blob | Uint8Array | ArrayBuffer,
    );
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onChangeAtavarOptions({ avatarImageProgress: progress });
      },
      (error) => {
        showMessage({
          message: 'Erro ao fazer upload da imagem',
          type: 'error',
        });
        onChangeAtavarOptions({ avatarImageProgress: 0 });
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          onChangeAtavarOptions({ avatarUrl: downloadURL, isVisible: false });
          showMessage({
            message: 'Upload da imagem realizado com sucesso',
            type: 'success',
          });
        });
      },
    );
  };

  return (
    <Dialog
      open={avatarUploadOptions.isVisible}
      onClose={handleClose}
      TransitionComponent={Transition}
      keepMounted
      aria-describedby="alert-dialog-slide-description"
      fullWidth
      sx={{
        '& .MuiDialog-paper': {
          borderRadius: '8px',
          backgroundColor: theme.palette.background.default,
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: 'absolute',
          top: '14px',
          right: '14px',
        }}
      >
        <Close />
      </IconButton>
      <DialogTitle sx={{ textAlign: 'center' }}>Upload de Imagem</DialogTitle>
      <DialogContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '16px',
          width: '100%',
        }}
      >
        <Typography variant="body1" color="text.primary">
          Clique na Imagem para fazer o upload
        </Typography>
        <Typography color="text.primary" variant="caption">
          Prefira imagens quadradas, com destaque para seu rosto
        </Typography>

        <Image
          src={image}
          alt="avatar"
          width={200}
          height={200}
          style={{ cursor: 'pointer', borderRadius: '8px' }}
          onClick={handleImageClick}
        />
        <Input
          type="file"
          inputRef={inputRef}
          sx={{ display: 'none' }}
          onChange={handleFileChange}
        />
        {avatarUploadOptions.avatarImageProgress > 0 && (
          <LinearProgress
            variant="determinate"
            color="success"
            value={avatarUploadOptions.avatarImageProgress}
            sx={{ width: '100%' }}
          />
        )}
        {errorMessage && (
          <Typography color="error" variant="caption">
            {errorMessage}
          </Typography>
        )}

        <DialogActions sx={{ justifyContent: 'center', width: '100%' }}>
          <Button
            fullWidth
            variant="outlined"
            color="error"
            onClick={handleClose}
          >
            cancelar
          </Button>
          <Button
            fullWidth
            disabled={!!errorMessage || !file}
            variant="contained"
            color="primary"
            onClick={handleUpload}
          >
            Salvar
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
}
