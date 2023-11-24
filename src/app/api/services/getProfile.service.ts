import { AppError } from '../utils/appError';
import { prisma } from '../database';

interface IGetProfileService {
  username: string;
}

export const getProfileService = async ({ username }: IGetProfileService) => {
  try {
    if (!username) throw new AppError('Requisição inválida', 400);
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
      include: {
        Course: true,
        Job: true,
        Project: true,
        Social: true,
        UserTechnology: {
          include: {
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
    if (!user) throw new AppError('Usuário não encontrado', 404);

    const userFormatted = {
      id: user.id,
      name: user.name,
      email: user.email,
      type: user.type,
      role: user.role,
      seniority: user.seniority,
      city: user.city,
      state: user.state,
      bio: user.bio,
      username: user.username,
      avatar_url: user.avatar_url,
      cover_url: user.cover_url,
      courses: user.Course,
      jobs: user.Job,
      projects: user.Project,
      technologies: user.UserTechnology.map((tech) => tech.Technology),
      contacts: user.Social[0],
    };

    return {
      user: userFormatted,
      status: 'success',
      message: 'Usuário encontrado',
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
      message: 'Erro interno do servidor',
    };
  }
};