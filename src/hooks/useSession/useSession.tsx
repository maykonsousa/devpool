import { appContext } from '@/contexts/AppContext';
import { signOut } from 'next-auth/react';
import { useContext } from 'react';

export const useSession = () => {
  const {
    userData, sessionData, sessionStatus, loadingSession, refetchUserData,
  } = useContext(appContext);

  return {
    user: userData,
    session: sessionData,
    status: sessionStatus,
    loading: loadingSession,
    refetch: refetchUserData,
    signOut,
  };
};
