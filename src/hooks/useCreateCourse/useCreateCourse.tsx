'use client';

import { gql, useMutation } from '@apollo/client';

interface ICourseData {
  courseUrl: string;
  description: string;
  duration: number;
  name: string;
  progress: number;
  school: string;
  type: string;
}

interface IVariables {
 input:{
  userId: string;
  data: ICourseData;
 }
}

interface IUseCreateCourseProps {
  variables: IVariables;
  onCompleted: () => void;
  onError: () => void;
}

interface IResult {
  createCourse: {
    id: string;
    status: string;
    message: string;
  };
}

const CREATE_COURSE = gql`
  mutation CreateCourse($input: CreateCourseInput) {
    createCourse(input: $input) {
      id
      status
      message
    }
  }
`;

export const useCreateCourse = ({ variables, onCompleted, onError }:IUseCreateCourseProps) => {
  const [createCourse, { data, error, loading }] = useMutation<IResult, IVariables>(CREATE_COURSE, {
    variables,
    onCompleted,
    onError,

  });

  return {
    createCourse,
    data,
    error,
    loading,
  };
};
