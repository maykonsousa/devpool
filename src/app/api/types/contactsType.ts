export interface IGetContactsInput {
  input: {
    userId?: string;
    username?: string;
  };
}

export interface IContactsDataInput {
  linkedin_url?: string;
  instagram_url?: string;
  github_url?: string;
  personal_website?: string;
  cell_phone?: string;
  twitter_url?: string;
}

export interface IUpdateContactsInput {
  input: {
    userId: string;
    data: IContactsDataInput;
  };
}
