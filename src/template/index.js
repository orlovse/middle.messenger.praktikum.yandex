import { getObjectField } from "../utils";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/gi;
const app = document.querySelector("#app");

export const renderTemplate = (templ, templData) => {
  let key = null;
  while ((key = TEMPLATE_REGEXP.exec(templ))) {
    if (key[1]) {
      const templValue = key[1].trim();
      const data = getObjectField(templData, templValue);
      templ = templ.replace(new RegExp(key[0], "gi"), data);
    }
  }
  app.innerHTML = templ;
};
