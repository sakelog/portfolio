import { format, parseISO } from 'date-fns';

export const getFormattedDateYMD = (dateString: string) => {
  const parsedDate = parseISO(dateString);
  const dateFormat = 'yyyy-MM-dd';
  const formattedDate = format(parsedDate, dateFormat);

  return formattedDate;
};

export const getFormattedDateYMJa = (dateString: string) => {
  const parsedDate = parseISO(dateString);
  const dateFormat = 'yyyy年MM月';
  const formattedDate = format(parsedDate, dateFormat);

  return formattedDate;
};