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

export const deepUpdate = (original, keys, value) => {
  if (typeof keys === "string") {
    keys = keys.split(".");
  }
  if (keys.length === 0) {
    return value;
  }
  const currentKey = keys[0];
  if (Array.isArray(original)) {
    return original.map((v, index) =>
      index === currentKey ? deepUpdate(v, keys.slice(1), value) : v
    );
  } else if (typeof original === "object" && original !== null) {
    return Object.fromEntries(
      Object.entries(original).map((keyValuePair) => {
        const [k, v] = keyValuePair;
        if (k === currentKey) {
          return [k, deepUpdate(v, keys.slice(1), value)];
        } else {
          return keyValuePair;
        }
      })
    );
  } else {
    return original;
  }
};
