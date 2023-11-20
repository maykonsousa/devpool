import { gql, useMutation } from '@apollo/client';

const UPDATE_TECHNOLOGY = gql`
mutation AddOrRemoveTechnologyUser($input: AddOrRemoveTechnologyUserInput) {
  addOrRemoveTechnologyUser(input: $input) {
    status
    message
  }
}`;

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

export const useUpdateTechnology = ({ variables }:IUseUpdateTechnology) => {
  const [
    updateTechnology,
    {
      data,
      loading,
      error,
    },
  ] = useMutation<IResult, IVariables>(UPDATE_TECHNOLOGY, {
    variables,
    refetchQueries: ['GetTechsByUser'],

  });

  return {
    updateTechnology,
    data: data?.addOrRemoveTechnologyUser,
    loading,
    error,
  };
};
