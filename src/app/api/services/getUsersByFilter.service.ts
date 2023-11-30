import { prisma } from '../database';

interface IFilters {
  technologies: string[];
  roles: string[];
  states: string[];
  seniorities: string[];
}

interface IGetUsersByFilterService {
  filters?: IFilters;
}

export const getUsersByFilterService = async ({
  filters,
}: IGetUsersByFilterService) => {
  try {
    let queryFilters = {};

    if (filters) {
      if (filters.technologies && filters.technologies.length > 0) {
        queryFilters = {
          ...queryFilters,
          UserTechnology: {
            some: {
              Technology: {
                name: {
                  in: filters.technologies,
                },
              },
            },
          },
        };
      }

      if (filters.roles && filters.roles.length > 0) {
        queryFilters = {
          ...queryFilters,
          role: {
            in: filters.roles,
          },
        };
      }

      if (filters.states && filters.states.length > 0) {
        queryFilters = {
          ...queryFilters,
          state: {
            in: filters.states,
          },
        };
      }

      if (filters.seniorities && filters.seniorities.length > 0) {
        queryFilters = {
          ...queryFilters,
          seniority: {
            in: filters.seniorities,
          },
        };
      }

      const users = await prisma.user.findMany({
        where: {
          ...queryFilters,
        },
        orderBy: {
          name: 'asc',
        },
        include: {
          Social: true,
          UserTechnology: true,
        },
      });

      return {
        users,
        status: 'success',
        message: 'Users found',
      };
    }
    // Se nenhum filtro for fornecido, recuperar todos os usuários
    const users = await prisma.user.findMany({
      include: {
        Social: true,
        UserTechnology: true,
      },
    });

    return {
      users,
      status: 'success',
      message: 'Users found',
    };
  } catch (error) {
    return {
      users: null,
      status: 'error',
      message: 'Error getting users',
    };
  }
};
