/* eslint-disable no-console */
import { gql, useQuery } from '@apollo/client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo } from 'react';
import { useFeedback } from '../useFeedBack';

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
  const { showMessage } = useFeedback();
  const isAuthLoading = status === 'loading';
  const isGithubAuthenticated = status === 'authenticated' && data?.user?.email;

  const variables = useMemo(() => ({
    input: {
      email: isGithubAuthenticated ? data?.user?.email : '',
    },
  }), [data, isGithubAuthenticated]);

  const { data: getUserData, loading, error } = useQuery(GET_USER_BY_EMAIL, {
    variables,
    fetchPolicy: 'no-cache',
  });

  const user = useMemo(() => getUserData?.getUserByEmail?.user, [getUserData]);
  console.log('user', user);
  console.log('data', data);

  useEffect(() => {
    if (user) {
      router.push('/community');
      showMessage({
        message: `Bem vindo(a) ${user.name}`,
        type: 'success',
      });
    } else if (!user && data && !isAuthLoading && !loading) {
      showMessage({
        message: 'Usuário GitHub não cadastrado na plataforma. Faça o seu cadatro e tente novamente',
        type: 'error',
      });
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, router, isAuthLoading, loading, data]);

  const handleLogin = async () => {
    await signIn('github');
  };

  return {
    handleLogin,
    loading,
    error,
  };
};
