import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

const UPDATE_TECHNOLOGY = gql`
  mutation AddOrRemoveTechnologyUser($input: AddOrRemoveTechnologyUserInput) {
    addOrRemoveTechnologyUser(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    technologyId: string;
    userId: string;
  };
}

interface IResult {
  addOrRemoveTechnologyUser: {
    status: string;
    message: string;
  };
}

interface IUseUpdateTechnology {
  variables: IVariables;
}

export const useUpdateTechnology = ({ variables }: IUseUpdateTechnology) => {
  const { data: session } = useSession();
  const [updateTechnology, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_TECHNOLOGY, {
    variables,
    refetchQueries: [
      'GetTechsByUser',
      {
        query: GET_PROFILE,
        variables: {
          input: {
            username: session?.user.name,
          },
        },
      },
    ],
  });

  return {
    updateTechnology,
    data: data?.addOrRemoveTechnologyUser,
    loading,
    error,
  };
};
