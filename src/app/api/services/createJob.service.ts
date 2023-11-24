import { prisma } from '../database';
import { JobInputData } from '../types/JobTypes';
import { AppError } from '../utils/appError';

interface ICreateJobService {
  userId: string;
  data: JobInputData;
  technologies: string[];
}

export const createJobService = async ({
  userId,
  data,
  technologies,
}: ICreateJobService) => {
  try {
    if (!userId) throw new AppError('Usuário não autenticado', 401);
    const userExists = await prisma.user.findUnique({ where: { id: userId } });

    if (!userExists) throw new AppError('Usuário não encontrado', 404);

    const jobCreated = await prisma.job.create({
      data: {
        name: data.name,
        company: data.company,
        description: data.description,
        startDate: data.startDate,
        isCurrent: data.isCurrent,
        endDate: data.isCurrent ? null : data.endDate,
        userId,
      },
    });

    technologies.forEach(async (element) => {
      const technologyExists = await prisma.technology.findFirst({
        where: {
          name: element,
        },
      });

      if (!technologyExists) {
        throw new AppError('Tecnologia não existe', 404);
      }

      await prisma.jobTechnology.create({
        data: {
          jobId: jobCreated.id,
          technologyId: technologyExists.id,
        },
      });
    });

    return {
      id: jobCreated.id,
      status: 'success',
      message: 'Experiência cadastrada com sucesso',
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
      message: 'Erro ao cadastrar experiência',
    };
  }
};
