import { IProjects } from '@/app/api/types/ProjectTypes';
import { gql, useQuery } from '@apollo/client';

const GET_PROJECTS_BY_USER = gql`
  query GetProjectsByUser($input: GetProjectsByUserInput!) {
    getProjectsByUser(input: $input) {
      projects {
        id
      name
      description
      image_url
      repo_url
      deployed_url
      technologies
      }
      status
      message
      
    }
  }
`;

interface IVariables {
  input:{
    userId:string
  }
}

interface IResult {
  getProjectsByUser: {
    projects: IProjects[];
    status: string;
    message: string;
  };
  }

export const useGetProjectsByUser = (userId:string) => {
  const {
    data, loading, error, refetch,
  } = useQuery<IResult, IVariables>(GET_PROJECTS_BY_USER, {
    variables: { input: { userId } },
    skip: !userId,
  });

  return {
    data: data?.getProjectsByUser,
    loading,
    error,
    refetch,
  };
};
