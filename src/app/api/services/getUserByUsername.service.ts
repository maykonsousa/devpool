import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetUserByUsernameService {
  username: string;
}
export const getUserByUsernameService = async ({
  username,
}: IGetUserByUsernameService) => {
  try {
    if (!username) throw new AppError('Requisição inválida', 400);
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) throw new AppError('Usuário não encontrado', 404);

    return {
      user,
      status: 'success',
      message: 'Usuário encontrado',
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
      message: 'Erro interno',
    };
  }
};
