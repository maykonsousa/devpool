/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */

'use client';

import { getGitHubUserByToken, IGitHubUser } from '@services/getGitHubUserByToken.service';
import { useSearchParams } from 'next/navigation';
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
  githubUser: IGitHubUser | null;
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
  githubUser: null,
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
  const [githubUser, setGithubUser] = useState<IGitHubUser | null>(null);

  const params = useSearchParams();

  const acessToken = useMemo(() => params.get('access_token') as string | null, [params]);

  const getGitHubUser = useCallback(async () => {
    if (acessToken) {
      const githubUserData = await getGitHubUserByToken(acessToken);
      setGithubUser(githubUserData);
    }
  }, [acessToken]);

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
    githubUser,
  }), [
    snackbarOptions,
    openSnackbar,
    closeSnackbar,
    avatarUploadOptions,
    onChangeAtavarOptions,
    handleOpenUploadDialog,
    githubUser,
  ]);

  useEffect(() => {
    getGitHubUser();
  }, [getGitHubUser]);
  return (
    <appContext.Provider value={values}>
      {children}
    </appContext.Provider>
  );
}
