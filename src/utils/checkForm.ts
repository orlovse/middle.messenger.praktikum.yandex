import { ValidationRules } from "../types";
import { emailRegExp, phoneRegExp } from "./regex";

export const checkValid = (rules: ValidationRules, value: string | number) => {
  let isValid = true;
  let currentMessage = '';
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

export const checkFormFields = (formSelector: string) => {
  const form = document.querySelector(formSelector);
  const inputs = form?.querySelectorAll('input');
  let isValid = true;
  inputs?.forEach((input) => {
    input.focus();
    input.blur();
    const errorClasses = input.nextElementSibling?.classList;
    if (
      errorClasses?.contains('input-error-message') &&
      !errorClasses?.contains('hide')
    ) {
      isValid = false;
    }
  });
  return isValid;
};
