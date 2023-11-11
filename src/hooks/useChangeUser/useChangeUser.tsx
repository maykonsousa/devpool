import { useQuery } from '@apollo/client';

export const useChangeUser = () => {
  const {
    data, loading, error, refetch,
  } = useQuery('CHANGE_USER');
};
