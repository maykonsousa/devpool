export interface LanguageInput {
  name: string;
  level: string;
  userId: string;
}

export interface ICreateLanguageInput {
  input: LanguageInput;
}

export interface IUpdateLanguageInput {
  input: {
    languageId: string;
    userId: string;
    newLevel: string;
  };
}

export interface IGetLanguagesByuserInput {
  input: {
    userId?: string;
    username?: string;
  };
}
