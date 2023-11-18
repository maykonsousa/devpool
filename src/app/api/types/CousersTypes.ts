export interface ICourseInputData {
  courseUrl: string;
  description: string;
  duration: number;
  name: string;
  progress: number;
  school: string;
  type: string;
}

export interface ICourseData {
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

export interface ICreateCourseInput {
  input:{
    userId: string;
    data: ICourseInputData;
  }
}

export interface IDeleteCourseInput {
  input:{
    courseId: string;
    userId: string;
  }
}

export interface IUpdateCourseInput {
  input:{
    courseId: string;
    userId: string;
    data: Partial<ICourseInputData>;
  }
}
