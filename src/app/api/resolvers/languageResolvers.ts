/* eslint-disable @typescript-eslint/no-explicit-any */
import { createLanguageService } from '../services/createLanguage.service';
import { getAllLanguagesService } from '../services/getAllLanguages.service';
import { getLanguagesByUser } from '../services/getLanguagesByUser.service';
import {
  ICreateLanguageInput,
  IGetLanguagesByuserInput,
} from '../types/languagesType';

export const languageResolvers = {
  Query: {
    getAllLanguages: async () => getAllLanguagesService(),
    getLanguagesByUser: async (_: any, args: IGetLanguagesByuserInput) =>
      getLanguagesByUser(args.input),
  },

  Mutation: {
    createLanguage: async (_: any, args: ICreateLanguageInput) =>
      createLanguageService(args.input),
  },
};
