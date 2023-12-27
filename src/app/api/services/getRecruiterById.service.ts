import { prisma } from '../database';
import { AppError } from '../utils/appError';

interface IGetRecruiterByIdServiceProps {
  id: string;
  userId: string;
}

export const getRecruiterByIdService = async ({
  id,
  userId,
}: IGetRecruiterByIdServiceProps) => {
  try {
    if (!id) throw new AppError('Requisição inválida', 400);
    if (!userId) throw new AppError('Requisição inválida', 400);
    const userAlredyExists = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userAlredyExists)
      throw new AppError(
        'Você não tem permissão para acessar essa página',
        403,
      );

    const recruiter = await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        Social: true,
      },
    });

    if (!recruiter) throw new AppError('Recrutador não encontrado', 404);

    const recruiterFormatted = {
      id: recruiter?.id,
      name: recruiter?.name,
      email: recruiter?.email,
      avatar_url: recruiter?.avatar_url,
      role: recruiter?.role,
      seniority: recruiter?.seniority,
      company: recruiter?.current_company,
      contacts: recruiter?.Social[0] || null,
    };

    return {
      recruiter: recruiterFormatted,
      message: 'Recrutador encontrado com sucesso',
      status: 'success',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        recruiter: null,
        message: error.message,
        status: 'error',
      };
    }

    return {
      recruiter: null,
      message: 'Falha ao buscar recrutador. Tente novamente mais tarde',
      status: 'error',
    };
  }
};
