import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IDeleteJobUserService {
  userId: string;
  jobId: string;
}

export const deleteJobUserService = async ({
  jobId,
  userId,
}: IDeleteJobUserService) => {
  try {
    if (!jobId || !userId) throw new AppError('Parametros inválidos');
    const userExists = await prisma.user.findFirst({ where: { id: userId } });
    if (!userExists) throw new AppError('Usuario não encontrado', 404);
    const jobExists = await prisma.job.findFirst({ where: { id: jobId } });
    if (!jobExists) throw new AppError('Experiencia não encontrada', 404);
    const userIsOwner = jobExists.userId === userId;
    if (!userIsOwner)
      throw new AppError(
        'Você não tem autorização para executar essa ação',
        401,
      );

    await prisma.job.delete({ where: { id: jobId } });

    return {
      message: 'Experiencia removida com sucesso',
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
      message: 'Falha ao remover experiencia',
      status: 'error',
    };
  }
};
