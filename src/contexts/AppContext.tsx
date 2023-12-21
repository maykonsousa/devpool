/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */

'use client';

import { useGetUser } from '@/hooks/useGetUser';
import { useSession } from 'next-auth/react';
import React, { useCallback, useMemo, useState } from 'react';

type SnackbarType = 'success' | 'error' | 'warning' | 'info';
type TSessionStatus = 'authenticated' | 'loading' | 'unauthenticated' | null;

interface ISessionData {
  user: {
    email: string;
    name: string;
    image: string;
  };
}

interface IUserData {
  username: string;
  updatedAt: string;
  type: 'developer' | 'recruiter';
  name: string;
  bio: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
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
  openSnackbar: ({
    message,
    type,
  }: {
    message: string;
    type: SnackbarType;
  }) => void;
  sessionData: ISessionData | null;
  userData: IUserData | null;
  loadingSession: boolean;
  refetchUserData: () => void;
  closeSnackbar: () => void;
  onChangeAtavarOptions: (options: Partial<IAvatarUploadOptions>) => void;
  onResetAtavarOptions: () => void;
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
  loadingSession: false,
  userData: INITIAL_USER_DATA,
  snackbarOptions: INITIAL_SNACKBAR_OPTIONS,
  avatarUploadOptions: INITIAL_AVATAR_UPLOAD_OPTIONS,
  refetchUserData: () => {},
  openSnackbar: ({
    message,
    type,
  }: {
    message: string;
    type: SnackbarType;
  }) => {},
  closeSnackbar: () => {},
  onChangeAtavarOptions: (options: Partial<IAvatarUploadOptions>) => {},
  handleOpenUploadDialog: () => {},
  onResetAtavarOptions: () => {},
};

export const appContext = React.createContext<IAppContext>(INITIAL_APP_CONTEXT);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [snackbarOptions, setSnackbarOptions] = useState(
    INITIAL_SNACKBAR_OPTIONS,
  );
  const [avatarUploadOptions, setAvatarUploadOptions] = useState(
    INITIAL_AVATAR_UPLOAD_OPTIONS,
  );
  const { data: sessionData, status: sessionStatus } = useSession();
  const username = useMemo(() => sessionData?.user?.name, [sessionData]);
  const email = useMemo(() => sessionData?.user?.email, [sessionData]);

  const {
    data: userData,
    loading: userLoading,
    refetch: refetchUserData,
  } = useGetUser({
    usernameVariables: {
      input: {
        username,
      },
    },
    emailVariables: {
      input: {
        email,
      },
    },
  }) || null;

  const loadingSession = useMemo(
    () => sessionStatus === 'loading' || userLoading,
    [sessionStatus, userLoading],
  );

  const openSnackbar = useCallback(
    ({ message, type }: { message: string; type: SnackbarType }) => {
      setSnackbarOptions({
        ...snackbarOptions,
        isVisible: true,
        message,
        type,
      });
    },
    [snackbarOptions],
  );

  const closeSnackbar = useCallback(() => {
    setSnackbarOptions({ ...snackbarOptions, isVisible: false });
  }, [snackbarOptions]);

  const onChangeAtavarOptions = useCallback(
    (options: Partial<IAvatarUploadOptions> = {}) => {
      setAvatarUploadOptions({ ...avatarUploadOptions, ...options });
    },
    [avatarUploadOptions],
  );

  const onResetAtavarOptions = useCallback(() => {
    setAvatarUploadOptions(INITIAL_AVATAR_UPLOAD_OPTIONS);
  }, []);

  const handleOpenUploadDialog = useCallback(() => {
    setAvatarUploadOptions({ ...avatarUploadOptions, isVisible: true });
  }, [avatarUploadOptions]);

  const values = useMemo(
    () => ({
      snackbarOptions,
      openSnackbar,
      closeSnackbar,
      avatarUploadOptions,
      onChangeAtavarOptions,
      handleOpenUploadDialog,
      sessionData,
      userData,
      sessionStatus,
      onResetAtavarOptions,
      loadingSession,
      refetchUserData,
    }),
    [
      snackbarOptions,
      openSnackbar,
      closeSnackbar,
      avatarUploadOptions,
      onChangeAtavarOptions,
      handleOpenUploadDialog,
      sessionData,
      userData,
      sessionStatus,
      onResetAtavarOptions,
      loadingSession,
      refetchUserData,
    ],
  );

  return <appContext.Provider value={values}>{children}</appContext.Provider>;
}
