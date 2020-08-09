import { parseISO, format } from 'date-fns';

function formatDate(date: string): string {
  const firstDate = parseISO(date);

  const formattedDate = format(firstDate, "dd'/'MM'/'yyyy");
  return formattedDate;
}

export default formatDate;
