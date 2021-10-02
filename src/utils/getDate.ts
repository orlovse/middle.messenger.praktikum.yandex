export const getDate = (date: string) => {
  const d = new Date(date);
  const formattedDate = d.getHours() + ':' + d.getMinutes(); //+ ", " + d.toDateString();
  return formattedDate;
};
