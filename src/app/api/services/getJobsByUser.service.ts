import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetJobsByUserService {
  userId?: string;
  username?: string;
}

export const getJobsByUserService = async ({ userId, username }:IGetJobsByUserService) => {
  try {
    if (!userId && !username) throw new AppError('Voce precisa informar o id ou o username do usuario', 400);
    const userExists = await prisma.user.findFirst({
      where: {
        OR: [
          { id: userId },
          { username },
        ],
      },
    });
    if (!userExists) throw new AppError('Usuario não encontrado', 404);
    const jobs = await prisma.job.findMany({
      where: {
        userId: userExists.id,
      },
      include: {
        JobTechnology: {
          select: {
            Technology: {
              select: {
                name: true,
                id: true,
              },
            },
          },
        },
      },
    });

    const jobsFormatted = jobs.map((job) => ({
      ...job,
      technologies: job.JobTechnology.map((technology) => ({
        id: technology.Technology.id,
        name: technology.Technology.name,
      })),
    }));

    return {
      jobs: jobsFormatted,
      status: 'success',
      message: 'Experiencias encontradas com sucesso',
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
      message: 'Erro ao buscar experiencias',
    };
  }
};
