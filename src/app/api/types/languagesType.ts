export interface LanguageInput {
  name: string;
  level: string;
  userId: string;
}

export interface ICreateLanguageInput {
  input: LanguageInput;
}

export interface IGetLanguagesByuserInput {
  input: {
    userId?: string;
    username?: string;
  };
}
