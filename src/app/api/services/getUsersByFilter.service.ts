/* eslint-disable @typescript-eslint/no-explicit-any */
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
    let queryFilters: any = {
      Social: {
        some: {
          AND: [{ linkedin_url: { not: null } }, { github_url: { not: null } }],
        },
      },
    };
    const orderBy: any = [
      {
        name: 'asc',
      },
    ];

    const orderByTechs: any = [
      {
        UserTechnology: {
          _count: 'desc',
        },
      },
      {
        name: 'asc',
      },
    ];

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
        orderBy: filters.technologies ? orderByTechs : orderBy,
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
    const users = await prisma.user.findMany({
      where: {
        Social: {
          some: {
            AND: [
              { linkedin_url: { not: null } },
              { github_url: { not: null } },
            ],
          },
        },
      },
      include: {
        Social: true,
        UserTechnology: true,
      },
      orderBy,
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
