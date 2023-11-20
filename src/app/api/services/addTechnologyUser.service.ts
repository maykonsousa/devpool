import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IAddTechnologyUserService {
  userId: string;
  technologyId: string;
}

export const addOrRemoveTechnologyUserService = async ({
  userId,
  technologyId,
}:IAddTechnologyUserService) => {
  try {
    if (!userId || !technologyId) {
      throw new AppError('Rquisição inválida');
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const technologyExists = await prisma.technology.findUnique({
      where: {
        id: technologyId,
      },
    });

    if (!technologyExists) {
      throw new AppError('Tecnologia não encontrada', 404);
    }

    const userTechnologyExists = await prisma.userTechnology.findFirst({
      where: {
        userId,
        technologyId,
      },
    });

    if (userTechnologyExists) {
      await prisma.userTechnology.delete({
        where: {
          id: userTechnologyExists.id,
        },
      });

      return {
        message: 'Tecnologia removida com sucesso',
        status: 'success',
      };
    }

    await prisma.userTechnology.create({
      data: {
        userId,
        technologyId,
      },
    });

    return {
      message: 'Tecnologia adicionada com sucesso',
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
      message: 'Erro interno',
      status: 'error',
    };
  }
};
