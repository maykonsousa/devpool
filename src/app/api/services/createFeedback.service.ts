import { prisma } from '../database';

interface IFeedback {
  name: string;
  email: string;
  phone: string;
  message: string;
}
interface ICreateFeedbackService {
  feedback: IFeedback;
}
export const createFeedbackService = async ({ feedback }:ICreateFeedbackService) => {
  try {
    await prisma.feedback.create({
      data: feedback,
    });

    return {
      status: 'success',
      message: 'Sua mensagem foi enviada com sucesso!. Aguarde nosso contato.',
    };
  } catch {
    return {
      status: 'error',
      message: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente.',
    };
  }
};
