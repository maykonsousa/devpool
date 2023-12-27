import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IJobInput {
  userId: string;
  startDate?: Date;
  name?: string;
  isCurrent?: boolean;
  id: string;
  description?: string;
  endDate?: Date;
  company?: string;
  technologies?: string[];
}

interface IUpdateJobService {
  data: IJobInput;
}

export const updateJobService = async ({ data }: IUpdateJobService) => {
  try {
    const userExists = await prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!userExists) {
      throw new AppError('Falha ao atualizar experiência profissional', 404);
    }

    const jobExists = await prisma.job.findUnique({
      where: { id: data.id },
    });

    if (!jobExists) {
      throw new AppError('Experiência profissional não encontrada', 404);
    }

    const job = await prisma.job.update({
      where: { id: data.id },
      data: {
        startDate: data.startDate,
        name: data.name,
        isCurrent: data.isCurrent,
        description: data.description,
        endDate: data.isCurrent ? null : data.endDate,
        company: data.company,
      },
    });

    const technologiesInput: string[] = data.technologies || [];

    technologiesInput.forEach(async (element) => {
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
          jobId: job.id,
          technologyId: technologyExists.id,
        },
      });
    });

    return {
      message: 'Experiência profissional atualizada com sucesso',
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
      message: 'Erro ao atualizar experiência profissional',
      status: 'error',
    };
  }
};
