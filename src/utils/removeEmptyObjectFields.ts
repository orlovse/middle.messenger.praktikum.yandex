export const removeEmptyObjectFields = (obj: any) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([k, v]) => {
      return v && k;
    })
  );
};
