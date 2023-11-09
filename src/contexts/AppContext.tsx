/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */

'use client';

import { useGetUserByEmail } from '@/hooks/useGetUserByEmail';
import { useSession } from 'next-auth/react';
import React, {
  useCallback, useMemo, useState,
} from 'react';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';
type TSessionStatus = 'authenticated' | 'loading' | 'unauthenticated' | null;

interface ISessionData {
  user: {
    email: string;
    name: string;
    image: string;
  };
}

interface IUserData{
  username: string;
  updatedAt: string;
  type: 'developer' | 'recruiter';
  name: string;
  id: string;
  email: string;
  createdAt: string;
  cover_url: string;
  avatar_url: string;

}

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
  sessionStatus?: TSessionStatus;
  snackbarOptions: ISnackbarOptions;
  avatarUploadOptions: IAvatarUploadOptions;
  openSnackbar: ({ message, type }:{message:string, type:SnackbarType }) => void;
  sessionData: ISessionData | null;
  userData: IUserData | null;
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

const INITIAL_USER_DATA = null;
const INITIAL_SESSION_DATA = null;

const INITIAL_APP_CONTEXT: IAppContext = {
  sessionData: INITIAL_SESSION_DATA,
  sessionStatus: null,
  userData: INITIAL_USER_DATA,
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
  const { data: sessionData, status: sessionStatus } = useSession();
  const email = useMemo(() => sessionData?.user?.email, [sessionData]);

  const { data: userData } = useGetUserByEmail(email) || null;

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
    sessionData,
    userData,
    sessionStatus,
  }), [
    snackbarOptions,
    openSnackbar,
    closeSnackbar,
    avatarUploadOptions,
    onChangeAtavarOptions,
    handleOpenUploadDialog,
    sessionData,
    userData,
    sessionStatus,
  ]);

  return (
    <appContext.Provider value={values}>
      {children}
    </appContext.Provider>
  );
}
