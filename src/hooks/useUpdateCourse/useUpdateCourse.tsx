import { ICourseInputData } from '@/app/api/types/CousersTypes';
import { gql, useMutation } from '@apollo/client';

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
  input:{
  userId: string;
  courseId: string;
  data: Partial<ICourseInputData>;
}
}

interface IUseUpdateCourse {
  variables: IVariables;
  onCompleted?: () => void;
  onError?: () => void;
}

export const useUpdateCourse = ({ variables, onCompleted, onError }:IUseUpdateCourse) => {
  const [updateCourse, { data, loading, error }] = useMutation(UPDATE_COURSE, {
    variables,
    onCompleted,
    onError,
    refetchQueries: ['GetCoursesByUser'],
  });

  return {
    updateCourse,
    data,
    loading,
    error,
  };
};
