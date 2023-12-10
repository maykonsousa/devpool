import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface ICreateLaguageService {
  name: string;
  level: string;
  userId: string;
}

export const createLanguageService = async (data: ICreateLaguageService) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: data.userId,
      },
      include: {
        UserLanguage: true,
      },
    });
    if (!user) {
      throw new AppError('User not found', 404);
    }

    const languageExists = user.UserLanguage.find(
      (language) => language.name === data.name,
    );

    if (languageExists) {
      throw new AppError('Idioma já cadastrado', 400);
    }

    await prisma.userLanguage.create({
      data,
    });

    return {
      message: 'Idioma criado com sucesso',
      status: 'success',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        message: error.message,
        status: 'error',
      };
    }
    return {
      message: 'Falha ao criar inserir idioma',
      status: 'error',
    };
  }
};
