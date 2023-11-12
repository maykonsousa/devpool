import { IProjectInput } from '@/app/api/types/ProjectTypes';
import { gql, useMutation } from '@apollo/client';

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
  }
}

export const useCreateProject = ({
  project,
  technologies,
}:{
  project:IProjectInput,
  technologies:string[]
}) => {
  const [createProject, {
    data,
    loading,
    error,

  }] = useMutation<ICreateProjectResult, IVariables>(CREATE_PROJECT, {
    variables: {
      input: {
        project,
        technologies,
      },

    },
  });

  return {
    createProject,
    data,
    loading,
    error,
  };
};
