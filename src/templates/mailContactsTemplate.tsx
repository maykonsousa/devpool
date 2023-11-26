import { Box } from '@mui/material';
import React from 'react';

interface IMailContactsTemplateProps {
  email: string;
  to: string;
  subject: string;
  message: string;
  nameTo: string;
  nameFrom: string;
}

export const mailContactsTemplate = (props: IMailContactsTemplateProps) => {
  return (
    <Box>
      <h1>Novo contato</h1>
      <p>
        De: {props.nameFrom}, {props.email}
      </p>
      <p>Para: {props.nameTo}</p>
      <p>Assunto: {props.subject}</p>
      <p>Mensagem: {props.message}</p>
    </Box>
  );
};
