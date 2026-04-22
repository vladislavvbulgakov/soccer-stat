export const formatDate = (utcDate: string): string => {
  const d = new Date(utcDate);
  return d.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};
