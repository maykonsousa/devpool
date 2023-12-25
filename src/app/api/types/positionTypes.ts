export interface IPositionInput {
  city?: string;
  company: string;
  description: string;
  language?: string;
  language_level?: string;
  model: string;
  role: string;
  seniority: string;
  state?: string;
  type: string;
  userId: string;
  is_resposible: boolean;
  url?: string;
  email?: string;
  techs: string[];
}

export interface ICreatePositionInput {
  input: IPositionInput;
}
