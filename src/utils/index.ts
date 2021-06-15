import { ValidationRules } from "./../types/index";
import { phoneRegExp, emailRegExp } from "./regex";
export const getObjectField = (
  obj: Object,
  path: string,
  defaultValue?: any
) => {
  const keys = path.split(".");

  let result = keys.reduce((acc, key) => {
    return acc[key];
  }, obj);

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

  return { isValid, currentMessage };
};

export const checkFormFields = (e: Event, formSelector: string) => {
  e.preventDefault();
  const form = document.querySelector(formSelector);
  const inputs = form?.querySelectorAll("input");
  let isValid = true;
  inputs?.forEach((input) => {
    input.focus();
    input.blur();
    const errorClasses = input.nextElementSibling?.classList;
    if (
      errorClasses?.contains("input-error-message") &&
      !errorClasses?.contains("hide")
    ) {
      isValid = false;
    }
  });
  return isValid;
};
