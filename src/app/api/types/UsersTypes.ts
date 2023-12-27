type UserType = 'admin' | 'developer' | 'recruiter' | 'user';
export interface IUserInput {
  type: UserType;
  email: string;
  name: string;
  current_company: string;
  password: string;
  username: string;
  avatar_url: string;
  cover_url: string;
  role: string;
  seniority: string;
  city: string;
  state: string;
}

export interface IcreateUserInput {
  input: IUserInput;
}

export interface IUpdateUserInput {
  input: {
    id: string;
    data: Partial<IUserInput>;
  };
}

export interface IGetUserByEmailInput {
  input: {
    email: string;
  };
}

export interface IgetUserByUsernameInput {
  input: {
    username: string;
  };
}

export interface IDeleteUserInput {
  input: {
    userId: string;
  };
}

export interface IGetProfileInput {
  input: {
    username: string;
  };
}

export interface IGetLinkedinUserInput {
  input: {
    token: string;
  };
}

export interface IGetRecruiterByIdInput {
  input: {
    id: string;
    userId: string;
  };
}

export interface IGetUsersByFilterInput {
  input: {
    filters: {
      technologies: string[];
      roles: string[];
      states: string[];
      seniorities: string[];
      pcd: boolean;
      language: string;
      level: string;
    };
  };
}
