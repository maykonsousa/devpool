import { gql, useQuery } from '@apollo/client';

const GET_COURSES_BY_USER = gql`
  query GetCoursesByUser($input:GetCoursesByUserInput) {
    getCoursesByUser(input:$input) {
      courses {
      userId
      updatedAt
      type
      school
      progress
      name
      id
      duration
      description
      createdAt
      courseUrl
    }
    status
    message
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
  };
}

interface ICourseData {
  userId: string;
  updatedAt: string;
  type: string;
  school: string;
  progress: number;
  name: string;
  id: string;
  duration: number;
  description: string;
  createdAt: string;
  courseUrl: string;
}

interface IResult {
  getCoursesByUser: {
    courses: ICourseData[];
    status: string;
    message: string;
  };
}

export const useGetCoursesByUser = (userId: string) => {
  const {
    data, loading, error, refetch,
  } = useQuery<IResult, IVariables>(GET_COURSES_BY_USER, {
    variables: {
      input: {
        userId,
      },
    },

  });

  return {
    data: data?.getCoursesByUser.courses,
    loading,
    error,
    refetch,
  };
};
