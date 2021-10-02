export const getFormData = (formSelector: string) => {
  const form = document.querySelector(formSelector);
  const inputs = form?.querySelectorAll('input');
  const data = {};
  inputs?.forEach((input) => {
    data[input.name] = input.value;
  });
  (form as HTMLFormElement).reset();

  return data;
};
