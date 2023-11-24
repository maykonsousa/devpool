import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IDeleteCourseUserService {
  userId: string;
  courseId: string;
}

export const deleteCourseUserService = async ({
  userId,
  courseId,
}: IDeleteCourseUserService) => {
  try {
    if (!userId || !courseId)
      throw new AppError('Falha ao deletar curso, dados inválidos', 400);
    const userExists = await prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) throw new AppError('Usuário não encontrado', 404);

    const courseExists = await prisma.course.findUnique({
      where: { id: courseId },
    });

    if (!courseExists) throw new AppError('Curso não encontrado', 404);

    if (courseExists.userId !== userId)
      throw new AppError(
        'Voce não tem autorização para remover esse curso',
        401,
      );

    await prisma.course.delete({ where: { id: courseId } });

    return {
      status: 'success',
      message: 'Curso removido com sucesso',
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
      message: 'Falha ao deletar curso. Tente novamente mais tarde',
    };
  }
};
