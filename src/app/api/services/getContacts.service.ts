import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetContactsService {
  userId?: string;
  username?: string;
}

export const getContactsService = async ({
  userId,
  username,
}: IGetContactsService) => {
  try {
    if (!userId && !username) {
      throw new AppError('Dados inválidos');
    }

    const userExists = await prisma.user.findFirst({
      where: {
        OR: [
          {
            id: userId,
          },
          {
            username,
          },
        ],
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const contacts = await prisma.social.findFirst({
      where: {
        userId,
      },
    });

    return {
      contacts,
      status: 'success',
      message: 'Contacts found',
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
      message: 'Internal server error',
    };
  }
};
