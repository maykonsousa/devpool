import bcrypt from 'bcrypt';
import { prisma } from '../database';
import { AppError } from '../utils/appError';

type UserType = 'admin' | 'developer' | 'recruiter';

interface IUserProps {
  id: string;
  name: string | null;
  email: string;
  type: UserType;
  username: string;
  avatar_url: string;
  cover_url: string;
  password?: string;
}
interface IAuthenticateProps {
  username: string;
  password: string;
}

interface IAuthenticateResponse {
  data: IUserProps | null;
  status: string;
  message: string;
}

export const authenticateService = async ({
  username,
  password,
}: IAuthenticateProps): Promise<IAuthenticateResponse> => {
  try {
    const user = (await prisma.user.findUnique({
      where: { username },
    })) as IUserProps;

    if (!user) {
      throw new AppError(
        'Falha no Login. Verifique os dados e tente novamente',
        401,
      );
    }

    const userPassword = user?.password as string;
    const passwordMatch = await bcrypt.compare(password, userPassword);

    if (!passwordMatch) {
      throw new AppError(
        'Falha no Login. Verifique os dados e tente novamente',
        401,
      );
    }

    delete user.password;

    return {
      data: user,
      status: 'success',
      message: 'Usuário autenticado com sucesso',
    };
  } catch (error) {
    if (error instanceof AppError) {
      return {
        data: null,
        status: 'error',
        message: error.message,
      };
    }
    return {
      data: null,
      status: 'error',
      message: 'Internal server error',
    };
  }
};
