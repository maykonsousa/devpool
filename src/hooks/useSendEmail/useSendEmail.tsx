import { gql, useMutation } from '@apollo/client';

const SEND_EMAIL = gql`
  mutation SendEmail($input: SendMailInput) {
    sendMail(input: $input) {
      status
      message
    }
  }
`;

interface IVariables {
  input: {
    toName: string;
    toEmail: string;
    subject: string;
    name: string;
    message: string;
    email: string;
  };
}

interface IResult {
  sendMail: {
    status: 'success' | 'error';
    message: string;
  };
}

interface IProps {
  variables: IVariables;
}

export const useSendEmail = ({ variables }: IProps) => {
  const [sendMail, { data, error, loading }] = useMutation<IResult, IVariables>(
    SEND_EMAIL,
    {
      variables,
    },
  );

  return { sendMail, data, error, loading };
};
