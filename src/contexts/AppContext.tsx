/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */

'use client';

import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';

interface ILoginInput {
  github_username: string;
  password: string;
}

interface ISnackbarOptions {
  message: string;
  type: SnackbarType;
  onClose?: () => void;
  isVisible?: boolean;

}
interface IAppContext {
  snackbarOptions: ISnackbarOptions;
  openSnackbar: ({ message, type }:{message:string, type:SnackbarType }) => void;
  closeSnackbar: () => void;
}
const INITIAL_SNACKBAR_OPTIONS: ISnackbarOptions = {
  message: '',
  type: 'success',
  onClose: () => {},
  isVisible: false,
} as ISnackbarOptions;

const INITIAL_APP_CONTEXT: IAppContext = {
  snackbarOptions: INITIAL_SNACKBAR_OPTIONS,
  openSnackbar: ({ message, type }:{message:string, type:SnackbarType }) => {},
  closeSnackbar: () => {},
};

export const appContext = React.createContext<IAppContext>(INITIAL_APP_CONTEXT);

export function AppProvider({ children }:{children: React.ReactNode}) {
  const [snackbarOptions, setSnackbarOptions] = useState(INITIAL_SNACKBAR_OPTIONS);

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

  const values = useMemo(() => ({
    snackbarOptions,
    openSnackbar,
    closeSnackbar,
  }), [snackbarOptions, openSnackbar, closeSnackbar]);
  return (
    <appContext.Provider value={values}>
      {children}
    </appContext.Provider>
  );
}
