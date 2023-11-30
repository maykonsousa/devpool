import { ICourseInputData } from '@/app/api/types/CousersTypes';
import { gql, useMutation } from '@apollo/client';
import { useSession } from 'next-auth/react';
import { GET_PROFILE } from '../useGetProfile/useGetProfile';

const UPDATE_COURSE = gql`
  mutation UpdateCourseUser($input: UpdateCourseInput) {
    updateCourseUser(input: $input) {
      status
      message
      id
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
    courseId: string;
    data: Partial<ICourseInputData>;
  };
}

interface IUseUpdateCourse {
  variables: IVariables;
  onCompleted?: () => void;
  onError?: () => void;
}

export const useUpdateCourse = ({
  variables,
  onCompleted,
  onError,
}: IUseUpdateCourse) => {
  const { data: session } = useSession();
  const [updateCourse, { data, loading, error }] = useMutation(UPDATE_COURSE, {
    variables,
    onCompleted,
    onError,
    refetchQueries: [
      'GetCoursesByUser',
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
    updateCourse,
    data,
    loading,
    error,
  };
};
