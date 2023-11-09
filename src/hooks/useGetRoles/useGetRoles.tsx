/* eslint-disable @typescript-eslint/no-explicit-any */
import { gql, useQuery } from '@apollo/client';

const GET_ROLES = gql`
  query GetRoles {
    getRoles {
      roles {
        id
        name
      }
      status
      message
    }
  }
`;

interface IGetRoleResult {
  getRoles: {
    roles: {
      id: string;
      name: string;
    }[];
    status: string;
    message: string;
  };
}

interface UseGetRoleResult {
  data: {
    id: string;
    name: string;
  }[] | []
  loading: boolean;
  error: any;
}

export const useGetRoles = ():UseGetRoleResult => {
  const { data, loading, error } = useQuery<IGetRoleResult>(GET_ROLES);
  return {
    data: data?.getRoles?.roles || [],
    loading,
    error,
  };
};
