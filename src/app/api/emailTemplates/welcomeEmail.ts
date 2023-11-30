interface IWelcomeEmail {
  name: string;
}

export const welcomeEmail = (props: IWelcomeEmail) => {
  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
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
              <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#e8eaed;margin:10px 0" />
              <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#666CFF">Seja bem-vindo(a) ao DEVPOOL</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Olá, ${props.name}!</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Estamos emocionados por você a bordo da nossa comunidade exclusiva, e queremos agradecer por se juntar à nossa missão de criar conexões significativas no mundo tech.</p>
              <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#fff">O QUE VOCÊ ENCONTRARÁ NO DEVPOOL</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">
                DEVPOOL é mais que um banco de talentos, é uma comunidade de profissionais se conectar com outros profissionais, empresas e oportunidades. Aqui é o lugar perfeito para:
              </p>
              <ul style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">
                <li style="margin-bottom:8px;">🚀 Expandir sua rede de contatos com outros profissionais apaixonados</li>
                <li style="margin-bottom:8px;">🌐 Compartilhar o seu perfil expondo suas competências, projetos e experiências.</li>
                <li style="margin-bottom:8px;">💼 Encontrar oportunidades de emprego alinhadas com seus objetivos de carreira.</li>
                <li style="margin-bottom:8px;">👀 Encontrar o talento ideal para sua empresa</li>
                <li style="margin-bottom:8px;">📢 Divulgar oportunidades de empregos, estágios e negócios</li>
              </ul>
              <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#fff">PRÓXIMOS PASSOS</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">
                Para aproveitar ao máximo a sua experiência, sugerimos que:
              </p>
              <ul style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">
                <li style="margin-bottom:8px;">👉🏼 <strong>Complete seu perfil:</strong> Adicione informações sobre suas habilidades, experiências e projetos. Isso ajudará a destacar seu perfil para recrutadores em potencial.</li>
                <li style="margin-bottom:8px;">👉🏼 <strong>Conecte-se com outros profissionais:</strong> Na página de comunidade a cada acesso você verá profissionais de diferentes áreas e conhecimentos. Adione-os nas redes sociais e expanda sua rede de contatos.</li>
                <li style="margin-bottom:8px;">👉🏼 <strong>Compartilhe o seu perfil:</strong> Ao clicar na sua foto de perfil, você terá acesso ao seu perfil completo e botões para compartilhar em diversas redes sociais. Aproveite para se mostrar!</li> 
                </li>
              </ul>
              <p style="font-size:14px;line-height:26px;margin:16px 0;font-weight:700;color:#fff">FEEDBACK É IMPORTANTE</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">
                Queremos saber o que você achou do DEVPOOL. Se você tiver alguma dúvida, sugestão ou feedback, não hesite em nos enviar uma mensagem. O envio poderá ser feito tanto através da plataforma, quanto pelo e-mail <a style="color:#666CFF;text-decoration:none;font-weight:700" href="mailto:contato@devpoolbr.com.br">contato@devpoolbr.com.br</a>.
          </tr>
        </tbody>
      </table>
      
     
      <table style="padding:0 40px" align="center" border="0" cellPadding="0" cellSpacing="0" role="presentation" width="100%">
        <tbody>
          <tr>
            <td>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">Atenciosamente,</p>
              <p style="font-size:20px;line-height:22px;margin:16px 0;color:#fff">Maykon Sousa</p>
              <p style="font-size:14px;line-height:22px;margin:16px 0;color:#fff">+55 61 99294-3297</p>
            </td>
          </tr>
        </tbody>
      </table>
      </td>
      </tr>
      </table>
    </body>
  
  </html>`;
  return html;
};
