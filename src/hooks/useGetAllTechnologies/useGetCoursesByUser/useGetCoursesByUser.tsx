import { ICourseData } from '@/app/api/types/CousersTypes';
import { gql, useQuery } from '@apollo/client';

const GET_COURSES_BY_USER = gql`
  query GetCoursesByUser($input: GetCoursesByUserInput) {
    getCoursesByUser(input: $input) {
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

interface IResult {
  getCoursesByUser: {
    courses: ICourseData[];
    status: string;
    message: string;
  };
}

// { label: 'Bootcamp', value: 'BOOTCAMP' },
//   { label: 'Curso Livre', value: 'FREECOURSE' },
//   { label: 'Doutorado', value: 'DOCTORATE' },
//   { label: 'Graduação', value: 'GRADUATION' },
//   { label: 'Mestrado', value: 'MASTER' },
//   { label: 'Pós-Graduação', value: 'POSTGRADUATE' },
//   { label: 'Técnico', value: 'TECHNICAL' },
//   { label: 'Tecnólogo', value: 'TECHNOLOGIST' },
//   { label: 'Outros', value: 'OTHER' },

const typeCoursesEnum = {
  BOOTCAMP: 'Bootcamp',
  FREECOURSE: 'Curso Livre',
  DOCTORATE: 'Doutorado',
  GRADUATION: 'Graduação',
  MASTER: 'Mestrado',
  POSTGRADUATE: 'Pós-Graduação',
  TECHNICAL: 'Técnico',
  TECHNOLOGIST: 'Tecnólogo',
  OTHER: 'Outros',
};

export const useGetCoursesByUser = (userId: string) => {
  const { data, loading, error, refetch } = useQuery<IResult, IVariables>(
    GET_COURSES_BY_USER,
    {
      variables: {
        input: {
          userId,
        },
      },
    },
  );

  const coursesMapped = data?.getCoursesByUser.courses.map((course) => ({
    ...course,
    type: typeCoursesEnum?.[course?.type],
  }));

  return {
    data: coursesMapped,
    loading,
    error,
    refetch,
  };
};
