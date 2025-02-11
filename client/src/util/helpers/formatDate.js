export const formatDate = (date) => {
  const parsedDate = new Date(date);

  parsedDate.setHours(0, 0, 0, 0);

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(parsedDate);
};
