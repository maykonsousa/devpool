export interface IAddOrRemoveTechnologyInput {
  input: {
    userId: string;
    technologyId: string;
  };
}

export interface IGetTechsByUserInput {
  input: {
    userId: string;
  };
}
