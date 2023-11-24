import {
  IGitHubUser,
  getGitHubUserByToken,
} from '@services/getGitHubUserByToken.service';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetUserByEmail } from '../useGetUserByEmail';

export const useGetUserByToken = (token: string) => {
  const [githubUser, setGitHubUser] = useState<IGitHubUser | null>(null);
  const getGitHubUser = useCallback(async () => {
    if (token) {
      const user = await getGitHubUserByToken(token);
      return user;
    }
    return null;
  }, [token]);

  const email = useMemo(() => githubUser?.email, [githubUser]) || '';

  const { data: userData } = useGetUserByEmail(email);
  useEffect(() => {
    getGitHubUser().then((user) => {
      setGitHubUser(user);
    });
  }, [userData, getGitHubUser]);

  return {
    user: userData,
  };
};
