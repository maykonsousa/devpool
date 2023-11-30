import { IProjectInput } from '@/app/api/types/ProjectTypes';
import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

const CREATE_PROJECT = gql`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      status
      message
      projectId
    }
  }
`;

interface ICreateProjectResult {
  createProject: {
    status: string;
    message: string;
    projectId: string;
  };
}

interface IVariables {
  input: {
    project: IProjectInput;
    technologies: string[];
  };
}

export const useCreateProject = ({
  project,
  technologies,
}: {
  project: IProjectInput;
  technologies: string[];
}) => {
  const { data: session } = useSession();
  const [createProject, { data, loading, error }] = useMutation<
    ICreateProjectResult,
    IVariables
  >(CREATE_PROJECT, {
    variables: {
      input: {
        project,
        technologies,
      },
    },
    refetchQueries: [
      'GetProjectsByUser',
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
    createProject,
    data,
    loading,
    error,
  };
};
