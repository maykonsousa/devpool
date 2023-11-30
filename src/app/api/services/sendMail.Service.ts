import { Resend } from 'resend';
import { AppError } from '../utils/appError';
import { emailFromContactForm } from '../emailTemplates';

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
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'DEV POOL <contato@devpoolbr.com.br>',
      to: toEmail,
      subject,
      html: emailFromContactForm({ name, subject, email, message, toName }),
    });

    if (error)
      throw new AppError(
        'Erro ao enviar mensagem. Tente novamente mais tarde ou entre em contato direto com usuário através do email informado.',
        500,
      );

    return {
      status: 'success',
      message: 'mensagem  enviada com sucesso!',
    };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    if (error instanceof AppError) {
      return {
        status: 'error',
        message: error.message,
      };
    }
    return {
      status: 'error',
      message:
        'Erro ao enviar mensagem. Tente novamente mais tarde ou entre em contato direto com usuário através do email informado.',
    };
  }
};
