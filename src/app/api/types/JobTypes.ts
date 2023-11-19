export interface JobInputData {
  name: string;
  company: string;
  description: string;
  isCurrent: boolean;
  startDate: Date;
  endDate: Date;
}

export interface ICreateJobInput {
  input: {
    userId: string;
    data: JobInputData;
    technologies: string[];
  }
}

export interface IGetJobsByUserInput {
  input: {
    userId?: string;
    username?: string;
  }
}

export interface IDeleteJobInput {
  input: {
    userId: string;
    jobId: string;
  }
}
