export const getIsDark = () => {
  const isDark = localStorage.getItem('isDark');
  const result = isDark ? JSON.parse(isDark) : false;
  return result;
};
