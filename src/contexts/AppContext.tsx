/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import { set } from 'firebase/database';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';

interface IAvatarUploadOptions {
  avatarUrl: string;
  avatarImageProgress: number;
  isVisible: boolean;
}

interface ISnackbarOptions {
  message: string;
  type: SnackbarType;
  onClose?: () => void;
  isVisible?: boolean;

}
interface IAppContext {
  snackbarOptions: ISnackbarOptions;
  avatarUploadOptions: IAvatarUploadOptions;
  openSnackbar: ({ message, type }:{message:string, type:SnackbarType }) => void;
  closeSnackbar: () => void;
  onChangeAtavarOptions: (options: Partial<IAvatarUploadOptions>) => void;
  handleOpenUploadDialog: () => void;
}
const INITIAL_SNACKBAR_OPTIONS: ISnackbarOptions = {
  message: '',
  type: 'success',
  onClose: () => {},
  isVisible: false,
} as ISnackbarOptions;

const INITIAL_AVATAR_UPLOAD_OPTIONS: IAvatarUploadOptions = {
  avatarUrl: '',
  avatarImageProgress: 0,
  isVisible: false,
} as IAvatarUploadOptions;

const INITIAL_APP_CONTEXT: IAppContext = {
  snackbarOptions: INITIAL_SNACKBAR_OPTIONS,
  avatarUploadOptions: INITIAL_AVATAR_UPLOAD_OPTIONS,
  openSnackbar: ({ message, type }:{message:string, type:SnackbarType }) => {},
  closeSnackbar: () => {},
  onChangeAtavarOptions: (options: Partial<IAvatarUploadOptions>) => {},
  handleOpenUploadDialog: () => {},
};

export const appContext = React.createContext<IAppContext>(INITIAL_APP_CONTEXT);

export function AppProvider({ children }:{children: React.ReactNode}) {
  const [snackbarOptions, setSnackbarOptions] = useState(INITIAL_SNACKBAR_OPTIONS);
  const [avatarUploadOptions, setAvatarUploadOptions] = useState(INITIAL_AVATAR_UPLOAD_OPTIONS);
  const openSnackbar = useCallback(({ message, type }:{message:string, type:SnackbarType }) => {
    setSnackbarOptions({
      ...snackbarOptions,
      isVisible: true,
      message,
      type,
    });
  }, [snackbarOptions]);

  const closeSnackbar = useCallback(() => {
    setSnackbarOptions({ ...snackbarOptions, isVisible: false });
  }, [snackbarOptions]);

  const onChangeAtavarOptions = useCallback((options: Partial<IAvatarUploadOptions> = {}) => {
    setAvatarUploadOptions({ ...avatarUploadOptions, ...options });
  }, [avatarUploadOptions]);

  const handleOpenUploadDialog = useCallback(() => {
    setAvatarUploadOptions({ ...avatarUploadOptions, isVisible: true });
  }, [avatarUploadOptions]);

  const values = useMemo(() => ({
    snackbarOptions,
    openSnackbar,
    closeSnackbar,
    avatarUploadOptions,
    onChangeAtavarOptions,
    handleOpenUploadDialog,
  }), [
    snackbarOptions,
    openSnackbar,
    closeSnackbar,
    avatarUploadOptions,
    onChangeAtavarOptions,
    handleOpenUploadDialog,
  ]);
  return (
    <appContext.Provider value={values}>
      {children}
    </appContext.Provider>
  );
}
