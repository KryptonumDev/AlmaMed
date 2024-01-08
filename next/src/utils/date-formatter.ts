export function transformDateFormat(inputDate: string) {
  // Parse the input date string
  const parsedDate = new Date(inputDate);

  // Format the date as DD MMMM YYYY
  const formattedDate = parsedDate.toLocaleDateString('pl-PL', { day: 'numeric', month: 'long', year: 'numeric' });

  return formattedDate;
}
