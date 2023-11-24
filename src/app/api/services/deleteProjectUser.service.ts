import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IDeleteProjectUserInput {
  projectId: string;
  userId: string;
}

export const deleteProjectUserService = async ({
  projectId,
  userId,
}: IDeleteProjectUserInput) => {
  try {
    const userExists = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const projectExists = await prisma.project.findFirst({
      where: {
        id: projectId,
      },
    });

    if (!projectExists) {
      throw new AppError('Projeto não encontrado', 404);
    }

    const isProjectOwner = projectExists.userId === userId;

    if (!isProjectOwner) {
      throw new AppError(
        'Você não tem permissão para remover esse projeto',
        401,
      );
    }

    await prisma.project.delete({
      where: {
        id: projectId,
      },
    });

    return {
      status: 'success',
      message: 'Projeto removido com sucesso',
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
      message: 'Falha ao remover projeto',
    };
  }
};
