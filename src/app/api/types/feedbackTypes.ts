export interface IFeedbackInputData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ICreateFeedbackInput {
  input: {
    feedback: IFeedbackInputData;
  };
}
