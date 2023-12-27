'use client';

import {
  IGitHubUser,
  getGitHubUserByToken,
} from '@services/getGitHubUserByToken.service';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useGetUser } from '../useGetUser';

export const useGetUserByToken = (token: string) => {
  const [githubUser, setGitHubUser] = useState<IGitHubUser | null>(null);
  const getGitHubUser = useCallback(async () => {
    if (token) {
      const user = await getGitHubUserByToken(token);
      return user;
    }
    return null;
  }, [token]);

  const username = useMemo(() => githubUser?.login, [githubUser]) || '';

  const { data: userData } = useGetUser({
    usernameVariables: { input: { username } },
  });
  useEffect(() => {
    getGitHubUser().then((user) => {
      setGitHubUser(user);
    });
  }, [userData, getGitHubUser]);

  return {
    user: userData,
  };
};
