import { prisma } from '../database';
import { ICourseInputData } from '../types/CousersTypes';
import { AppError } from '../utils/appError';

interface IUpdateCourseService {
  userId: string;
  courseId: string;
  data: Partial<ICourseInputData>;
}

export const updateCourseService = async ({
  courseId,
  userId,
  data,
}:IUpdateCourseService) => {
  try {
    if (!userId) throw new AppError('Usuário não encontrado', 404);
    if (!courseId) throw new AppError('Curso não encontrado', 404);
    const userAlreadyExists = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!userAlreadyExists) {
      throw new AppError('Usuário não encontrado', 404);
    }

    const courseAlreadyExists = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!courseAlreadyExists) {
      throw new AppError('Curso não encontrado', 404);
    }

    const userIsOwnerOfCourse = courseAlreadyExists.userId === userId;

    if (!userIsOwnerOfCourse) {
      throw new AppError('Você não tem autorização para editar esse curso', 401);
    }

    const course = await prisma.course.update({
      where: { id: courseId },
      data,
    });

    return {
      id: course.id,
      message: 'Curso atualizado com sucesso',
      status: 'success',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        message: error.message,
        status: 'error',
        id: null,
      };
    }

    return {
      message: 'Falha ao editar o curso. tente novamente mais tarde',
      status: 'error',
      id: null,
    };
  }
};
