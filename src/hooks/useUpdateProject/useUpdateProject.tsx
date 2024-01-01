import { gql, useMutation } from '@apollo/client';

const UPDATE_PROJECT = gql`
  mutation UpdateProjectUser($input: UpdateProjectInput) {
    updateProjectUser(input: $input) {
      message
      status
    }
  }
`;

interface IVariables {
  input: {
    projectId: string;
    userId: string;
    name?: string;
    description?: string;
    image_url?: string;
    repo_url?: string;
    deployed_url?: string;
    technologies: string[];
  };
}

interface IResult {
  updateProjectUser: {
    message: string;
    status: string;
  };
}

interface IUseUpdateProject {
  variables: IVariables;
}

export const useUpdateProject = ({ variables }: IUseUpdateProject) => {
  const [updateProject, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(UPDATE_PROJECT, {
    variables,
    refetchQueries: ['GetProjectsByUser'],
  });

  return { updateProject, data, loading, error };
};
