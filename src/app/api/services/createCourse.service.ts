import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface ICourseData {
  courseUrl: string;
  description: string;
  duration: number;
  name: string;
  progress: number;
  school: string;
  type: string;

}

interface ICreateCourseService {
  userId: string;
  data: ICourseData;
}

export const createCourseService = async ({ userId, data }:ICreateCourseService) => {
  try {
    const userAlreadyExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userAlreadyExists) {
      throw new AppError('usuário não encontrado', 404);
    }

    const course = await prisma.course.create({
      data: {
        ...data,
        userId: userAlreadyExists.id,
      },
    });

    return {
      id: course.id,
      status: 'success',
      message: 'Curso criado com sucesso',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        id: null,
        status: 'error',
        message: error.message,
      };
    }
    return {
      id: null,
      status: 'error',
      message: 'Falha ao criar curso. Tente novamente mais tarde',
    };
  }
};
