import { gql, useMutation } from '@apollo/client';

const DELETE_COURSE = gql`
  mutation DeleteCourseUser($input: DeleteCourseInput!) {
    deleteCourseUser(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    userId: string;
    courseId: string;
  };
}

interface IResult {
  deleteCourseUser: {
    status: string;
    message: string;
  };
}

interface IDeleteCoursePros {
  variables: IVariables;
  onCompleted: () => void;
  onError: () => void;
}

export const useDeleteCourse = ({
  variables,
  onCompleted,
  onError,
}: IDeleteCoursePros) => {
  const [deleteCourse, { data, loading, error }] = useMutation<
    IResult,
    IVariables
  >(DELETE_COURSE, {
    variables,
    onCompleted,
    onError,
  });

  return {
    deleteCourse,
    data,
    loading,
    error,
  };
};
