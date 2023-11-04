/* eslint-disable no-console */
import { gql, useQuery } from '@apollo/client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import { useFeedback } from '../useFeedBack';

interface ISession {
  user: {
    email: string;
    name: string;
    avatar_url: string;
  };
  expires: string;
}

const GET_USER_BY_EMAIL = gql`
  query GetUserByEmail($input: GetUserByEmailInput!) {
    getUserByEmail(input: $input) {
    user {
      username
      updatedAt
      type
      name
      id
      email
      createdAt
      cover_url
      avatar_url
    }
    status
    message
  }
  }
`;

export const useGithubLogin = () => {
  const { data, status } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showMessage } = useFeedback();
  const { get } = searchParams;
  const callbackUrl = get('callbackUrl');
  const isAuthLoading = status === 'loading';
  const [serverSession, setServerSession] = useState<ISession | null >(null);

  const variables = useMemo(() => ({
    input: {
      email: serverSession?.user?.email,
    },
  }), [serverSession]);

  const { data: getUserData, loading, error } = useQuery(GET_USER_BY_EMAIL, {
    variables,
    fetchPolicy: 'no-cache',
  });

  const user = useMemo(() => getUserData?.getUserByEmail?.user, [getUserData]);
  console.log({ serverSession });

  useEffect(() => {
    fetch('/api/auth').then((res) => res.json()).then((json) => {
      setServerSession(json);
    });
  }, []);

  const urlGitLogin = useMemo(() => {
    if (callbackUrl) {
      return `/auth/signin?callbackUrl=${callbackUrl}`;
    }
    return '/auth/signin';
  }, [callbackUrl]);

  useEffect(() => {
    if (user) {
      router.push(callbackUrl || '/community');
      showMessage({
        message: `Bem vindo(a) ${user.name}`,
        type: 'success',
      });
    } else if (!user && serverSession && !isAuthLoading && !loading) {
      showMessage({
        message: 'Usuário GitHub não cadastrado na plataforma. Faça o seu cadatro e tente novamente',
        type: 'error',
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, router, callbackUrl, isAuthLoading, loading, data]);

  const handleLogin = async () => {
    await signIn('github', { callbackUrl: urlGitLogin });
  };

  return {
    handleLogin,
    loading,
    error,
  };
};
