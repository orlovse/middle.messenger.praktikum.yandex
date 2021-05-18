import { getObjectField } from "../utils";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
const app = document.querySelector("#app");

export const createTemplate = (templ, templData) => {
  let key = null;
  while ((key = TEMPLATE_REGEXP.exec(templ))) {
    if (key[1]) {
      const templValue = key[1].trim();
      let data = getObjectField(templData, templValue);
      if (typeof data === "function") {
        data();
      }
      templ = templ.replace(new RegExp(key[0], "gi"), data);
    }
  }
  return templ;
};

export const mountTemplate = (template, selector) => {
  if (typeof template === "function") {
    template = template();
  }
  app.innerHTML = template;
};
