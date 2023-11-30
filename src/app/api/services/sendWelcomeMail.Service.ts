import { Resend } from 'resend';
import { AppError } from '../utils/appError';
import { welcomeEmail } from '../emailTemplates';

interface ISendMailService {
  name: string;
  toEmail: string;
}

export const sendWelcomeMailService = async ({
  name,
  toEmail,
}: ISendMailService) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'DEV POOL <contato@devpoolbr.com.br>',
      to: toEmail,
      subject: 'Seja bem-vindo(a) ao DEVPOOL',
      html: welcomeEmail({ name }),
    });

    if (error)
      throw new AppError(
        'Erro ao enviar mensagem. Tente novamente mais tarde ou entre em contato direto com usuário através do email informado.',
        500,
      );
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error);
  }
};
