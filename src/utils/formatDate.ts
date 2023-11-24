import { format } from 'date-fns';

export const formatDate = (date: string) => {
  const newDate = new Date(+date);
  const formattedDate = format(newDate, 'dd/MM/yyyy');
  return formattedDate;
};
