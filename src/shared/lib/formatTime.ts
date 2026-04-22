export const formatTime = (utcDate: string): string => {
  const d = new Date(utcDate);
  return d.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
  });
};
