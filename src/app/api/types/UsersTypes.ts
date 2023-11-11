type UserType = 'admin' | 'developer' | 'recruiter' | 'user'
export interface IUserInput {
  type: UserType;
  email: string;
  name: string;
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
    data: Partial<IUserInput>
  };
  }

export interface IGetUserByEmailInput {
  input:{
    email: string;
  }
}
