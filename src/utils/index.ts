export const getObjectField = (
  obj: Object,
  path: string,
  defaultValue?: any
) => {
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

export const deepUpdate = (original: Object, keys: string, value: any) => {
  const keysArr = keys.split(".");
  const currentKey = keysArr[0];
  if (Array.isArray(original)) {
    return original.map((v, index) =>
      index === parseInt(currentKey)
        ? deepUpdate(v, keysArr.slice(1).join("."), value)
        : v
    );
  } else if (typeof original === "object" && original !== null) {
    return Object.fromEntries(
      Object.entries(original).map((keyValuePair) => {
        const [k, v] = keyValuePair;
        if (k === currentKey) {
          return [k, deepUpdate(v, keysArr.slice(1).join("."), value)];
        } else {
          return keyValuePair;
        }
      })
    );
  } else {
    return original;
  }
};
