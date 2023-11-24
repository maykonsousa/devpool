export interface IProjectInput {
  name: string;
  description: string;
  image_url: string;
  repo_url: string;
  deployed_url: string;
  user_id: string;
  githubId: string;
}

interface ITecnology {
  id: string;
  name: string;
}

export interface IProjects {
  id: string;
  name: string;
  description: string;
  image_url: string;
  repo_url: string;
  deployed_url: string;
  userId: string;
  githubId: string;
  createdAt: string;
  updatedAt: string;
  technologies: ITecnology[];
}

export interface ICreateProjectInput {
  input: {
    project: IProjectInput;
    technologies: string[];
  };
}

export interface IGetProjectsByUserInput {
  input: {
    userId: string;
    username: string;
  };
}

export interface IDeleteProjectInput {
  input: {
    projectId: string;
    userId: string;
  };
}
