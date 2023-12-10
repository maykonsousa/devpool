import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetLanguagesByUser {
  userId?: string;
  username?: string;
}

export const getLanguagesByUser = async ({
  userId,
  username,
}: IGetLanguagesByUser) => {
  try {
    if (!userId && !username)
      throw new AppError('userId or userName is required');
    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
        username,
      },
      include: {
        UserLanguage: true,
      },
    });

    if (!userExists) throw new AppError('User not found');

    return {
      languages: userExists.UserLanguage,
      status: 'success',
      message: 'Languages found',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        status: 'error',
        message: error.message,
      };
    }

    return {
      status: 'error',
      message: 'Falha ao buscar Idiomas',
    };
  }
};
