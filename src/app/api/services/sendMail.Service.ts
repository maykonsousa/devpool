import { Resend } from 'resend';
import { AppError } from '../utils/appError';

interface ISendMailService {
  name: string;
  subject: string;
  email: string;
  message: string;
  toName: string;
  toEmail: string;
}

export const sendMailService = async ({
  name,
  subject,
  email,
  message,
  toEmail,
  toName,
}: ISendMailService) => {
  try {
    const resend = new Resend('re_VcvYXXrW_7BVHt3UXo8WFMDePvQhARyUd');
    const { error } = await resend.emails.send({
      from: 'DEV POOL <onboarding@resend.dev>',
      to: toEmail,
      subject,
      html: `
        <h1>Olá ${toName},</h1>
        <p>${message}</p>
        <p>Att, ${name}</p>
        <p>${email}</p>
      `,
    });

    if (error) throw new AppError(error.message, 500);

    return {
      status: 'success',
      message: 'mensagem  enviada com sucesso!',
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
      message: 'Erro ao enviar a mensagem!',
    };
  }
};
