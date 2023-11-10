export interface IProjectInput {
  name: string;
  description: string;
  image_url: string;
  repo_url: string;
  deployed_url: string;
  user_id: string;

}

export interface IProjects {
  id: string;
  name: string;
  description: string;
  image_url: string;
  repo_url: string;
  deployed_url: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  technologies: string[];

}

export interface ICreateProjectInput {
    input : {
      project: IProjectInput;
      technologies: string[];
    }
}

export interface IGetProjectsByUserInput {
  input: {
  userId: string;
}
}