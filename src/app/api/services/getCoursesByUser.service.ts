import { prisma } from '../database';
import { AppError } from '../utils/appError';

export const getCoursesByUserService = async (userId: string) => {
  try {
    if (!userId) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const userExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const courses = await prisma.course.findMany({
      where: {
        userId,
      },
    });

    return {
      courses,
      status: 'success',
      message: 'Cursos encontrados',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        courses: null,
        status: 'error',
        message: error.message,
      };
    }

    return {
      courses: null,
      status: 'error',
      message: 'Falha ao buscar cursos. Tente novamente mais tarde',
    };
  }
};
