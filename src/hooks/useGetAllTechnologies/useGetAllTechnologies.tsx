import { gql, useQuery } from '@apollo/client';

const GET_ALL_TECHNOLOGIES = gql`
  query GetAllTechnologies {
    getTechnologies {
    technologies {
      id
      name
    }
  }
}
`;

export const useGetAllTechnologies = () => {
  const { data, loading, error } = useQuery(GET_ALL_TECHNOLOGIES);

  const technologies = data?.getTechnologies.technologies;
  const onlyNames = technologies?.map((tech:{id:string, name:string}) => tech.name);

  return {
    technologies,
    loading,
    error,
    onlyNames,
  };
};
