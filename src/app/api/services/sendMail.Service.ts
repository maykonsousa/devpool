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
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: 'DEV POOL <contato@devpoolbr.com.br>',
      to: toEmail,
      subject,
      html: `
      <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      <html lang="en">
      
        <head></head>
        <div id="__react-email-preview" style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">Nova Mensagem DevPool
        </div>
      
        <body style="background-color:#282A42;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
          <table align="center" role="presentation" cellSpacing="0" cellPadding="0" border="0" width="100%" style="max-width:37.5em;margin:30px auto;width:610px;background-color:#282A42;border-radius:5px;overflow:hidden">
            <tr style="width:100%">
              <td>
                <table align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
                  <tbody>
                    <tr>
                      <td>
                      <td align="center"><img alt="Logo DevPool" src="https://firebasestorage.googleapis.com/v0/b/devpool-110a7.appspot.com/o/logo.png?alt=media&token=6ffb7018-4d5f-4cec-a72e-916201eea411" width="230" height="230" style="display:block;outline:none;border:none;text-decoration:none;padding:0" /></td>
              </td>
            </tr>
            </tbody>
          </table>
          <table style="padding:0 40px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
            <tbody>
              <tr>
                <td>
                  <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:20px 0" />
                  <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#666CFF">NOVA MENSAGEM</p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Olá, ${toName}!</p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Você recebeu uma mensagem diretamente no seu perfil na plataforma <a style="text-decoration:none; color:#666CFF; font-weight:bold;" href="https://www.devpoolbr.com.br">DEVPOOL</a></p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Para responder a mensagem, não responda diretamente aqui. Crie um novo email utilizando os daados do remetente.</p>
                </td>
              </tr>
            </tbody>
          </table>
          <table style="background-color:#30334E;" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
            <tbody>
              <tr>
                <td style="padding:16px 40px; margin:40px">
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff"><strong>Nome:</strong> ${name}</p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff"><strong>E-mail:</strong> ${email}</p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff"><strong>Assunto:</strong> ${subject}</p>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff"><strong>Mensagem:</strong> ${message}</p>
                </td>
              </tr>
            </tbody>
          </table>
         
          <table style="padding:0 40px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
            <tbody>
              <tr>
                <td>
                  <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Atenciosamente,</p>
                  <p style="font-size:20px;line-height:22px;margin:16px 0;color:#fff">DEV POOL</p>
                </td>
              </tr>
            </tbody>
          </table>
          </td>
          </tr>
          </table>
        </body>
      
      </html>
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
