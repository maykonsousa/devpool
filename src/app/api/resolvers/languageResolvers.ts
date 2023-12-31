/* eslint-disable @typescript-eslint/no-explicit-any */
import { createLanguageService } from '../services/createLanguage.service';
import { deleteLanguageUserService } from '../services/deleteLaguageUser.service';
import { getAllLanguagesService } from '../services/getAllLanguages.service';
import { getLanguagesByUser } from '../services/getLanguagesByUser.service';
import { UpdateLanguageService } from '../services/updateLanguage.service';
import {
  ICreateLanguageInput,
  IDeleteLanguageInput,
  IGetLanguagesByuserInput,
  IUpdateLanguageInput,
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
    updateLanguage: async (_: any, args: IUpdateLanguageInput) =>
      UpdateLanguageService(args.input),
    deleteLanguage: async (_: any, args: IDeleteLanguageInput) =>
      deleteLanguageUserService(args.input),
  },
};
