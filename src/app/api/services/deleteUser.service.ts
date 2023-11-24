import { prisma } from '../database';
import { AppError } from '../utils/appError';

export const deleteUserService = async (userId: string) => {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return {
      status: 'success',
      message:
        'Conta deletada com sucesso. Obrigado por usar nossa plataforma!',
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
      message: 'Falha ao remover conta',
    };
  }
};
