import { appContext } from '@/contexts/AppContext';
import { useContext } from 'react';

export const useUpload = () => {
  const {
    handleOpenUploadDialog: openUpload,
    onChangeAtavarOptions,
    avatarUploadOptions,
    onResetAtavarOptions,
  } = useContext(appContext);

  const url = avatarUploadOptions?.avatarUrl;
  const progress = avatarUploadOptions?.avatarImageProgress;

  const setUrl = (newUrl: string) => {
    onChangeAtavarOptions({ ...avatarUploadOptions, avatarUrl: newUrl });
  };

  const setProgress = (newProgress: number) => {
    onChangeAtavarOptions({
      ...avatarUploadOptions,
      avatarImageProgress: newProgress,
    });
  };
  return {
    openUpload, url, progress, setUrl, setProgress, onResetAtavarOptions,
  };
};
