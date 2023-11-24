import { appContext } from '@/contexts/AppContext';
import { useContext } from 'react';

interface IFeedbackOptions {
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export const useFeedback = () => {
  const { openSnackbar } = useContext(appContext);

  const showMessage = ({ message, type }: IFeedbackOptions) => {
    openSnackbar({ message, type });
  };

  return {
    showMessage,
  };
};
