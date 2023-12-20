/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '../database';

interface IFilters {
  technologies: string[];
  roles: string[];
  states: string[];
  seniorities: string[];
  pcd: boolean;
  language: string;
  level: string;
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

    const orderByTechnologiesMatchFilter: any = [
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

      if (filters.pcd) {
        queryFilters = {
          ...queryFilters,
          pcd: filters.pcd,
        };
      }

      if (filters.language) {
        if (filters.level) {
          queryFilters = {
            ...queryFilters,
            UserLanguage: {
              some: {
                name: filters.language,
                level: filters.level,
              },
            },
          };
        } else {
          queryFilters = {
            ...queryFilters,
            UserLanguage: {
              some: {
                name: filters.language,
              },
            },
          };
        }
      }

      const users = await prisma.user.findMany({
        where: {
          ...queryFilters,
        },
        orderBy:
          filters?.technologies?.length > 0
            ? orderByTechnologiesMatchFilter
            : orderBy,

        include: {
          Social: true,
          UserTechnology: {
            include: {
              Technology: true,
            },
          },
        },
      });

      const usersFormatted = users.map((user) => {
        const technologies = user.UserTechnology.map((userTechnology) => {
          return userTechnology.Technology.name;
        });

        return {
          ...user,
          technologies,
        };
      });

      const usersOrderedByTechnologiesMatchFilter = usersFormatted.sort(
        (a, b) => {
          const countA = a.UserTechnology.filter(
            (tech) =>
              filters?.technologies?.includes(tech.Technology.name) ?? false,
          ).length;
          const countB = b.UserTechnology.filter(
            (tech) =>
              filters?.technologies?.includes(tech.Technology.name) ?? false,
          ).length;

          return countB - countA;
        },
      );

      return {
        users:
          filters?.technologies?.length > 0
            ? usersOrderedByTechnologiesMatchFilter
            : usersFormatted,
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
