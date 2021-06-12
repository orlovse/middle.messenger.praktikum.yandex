export const getObjectField = (obj, path, defaultValue) => {
  const keys = path.split(".");

  let result = obj;
  for (let key of keys) {
    result = result[key];

    if (result === undefined) {
      return defaultValue;
    }
  }
  return result ?? defaultValue;
};

export const createId = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
