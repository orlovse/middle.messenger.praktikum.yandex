import { ValidationRules } from "./../types/index";
import { phoneRegExp, emailRegExp } from "./regex";
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

export const deepUpdate = (
  original: Object,
  keys: string | string[],
  value: any
) => {
  if (typeof keys === "string") {
    keys = keys.split(".");
  }

  if (keys.length === 0) {
    return value;
  }

  const currentKey = keys[0];
  if (Array.isArray(original)) {
    return original.map((v, index) =>
      index === parseInt(currentKey) ? deepUpdate(v, keys.slice(1), value) : v
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

export const checkValid = (rules: ValidationRules, value: string | number) => {
  let isValid = true;
  let currentMessage = "";
  if (rules.isRequired && !value) {
    isValid = false;
    currentMessage = `Field is required`;
  } else if (rules.minSymbols && rules.minSymbols > value.toString().length) {
    isValid = false;
    currentMessage = `Less then ${rules.minSymbols} symbols`;
  } else if (rules.phone && !value.toString().match(phoneRegExp)) {
    isValid = false;
    currentMessage = `Invalid phone`;
  } else if (rules.email && !value.toString().match(emailRegExp)) {
    isValid = false;
    currentMessage = `Invalid email`;
  }

  if (rules.phone) {
    console.log("value", value);
    console.log(
      "value.toString().match(phoneRegExp)",
      value.toString().match(phoneRegExp)
    );
  }

  return { isValid, currentMessage };
};
