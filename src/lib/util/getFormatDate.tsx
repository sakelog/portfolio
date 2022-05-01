import { format, parseISO, isFuture } from 'date-fns';

const checkNotFuture = (targetDate: Date) =>
  isFuture(targetDate) ? false : true;

export const getFormattedDateYMD = (
  dateString: string,
  futureCheck?: boolean
) => {
  const parsedDate = parseISO(dateString);
  const dateFormat = 'yyyy-MM-dd';
  const formattedDate = futureCheck
    ? checkNotFuture(parsedDate) &&
      format(parsedDate, dateFormat)
    : format(parsedDate, dateFormat);

  return formattedDate || '';
};
getFormattedDateYMD.defaultProps = {
  futureCheck: false,
};

export const getFormattedDateYYYYMMJa = (
  dateString: string,
  futureCheck?: boolean
) => {
  const parsedDate = parseISO(dateString);
  const dateFormat = 'yyyy年MM月';
  const formattedDate = futureCheck
    ? checkNotFuture(parsedDate) &&
      format(parsedDate, dateFormat)
    : format(parsedDate, dateFormat);

  return formattedDate || '';
};
getFormattedDateYYYYMMJa.defaultProps = {
  futureCheck: false,
};

export const getFormattedDateYYYYJa = (
  dateString: string,
  futureCheck?: boolean
) => {
  const parsedDate = parseISO(dateString);
  const dateFormat = 'yyyy年';
  const formattedDate = futureCheck
    ? checkNotFuture(parsedDate) &&
      format(parsedDate, dateFormat)
    : format(parsedDate, dateFormat);

  return formattedDate || '';
};
getFormattedDateYYYYJa.defaultProps = {
  futureCheck: false,
};

export default {
  getFormattedDateYMD,
  getFormattedDateYYYYJa,
  getFormattedDateYYYYMMJa,
};
