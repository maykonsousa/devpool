interface ICourseData {
  courseUrl: string;
  description: string;
  duration: number;
  name: string;
  progress: number;
  school: string;
  type: string;
}

export interface ICreateCourseInput {
  input:{
    userId: string;
    data: ICourseData;
  }
}

export interface IDeleteCourseInput {
  input:{
    courseId: string;
    userId: string;
  }
}
