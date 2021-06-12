import { getObjectField, createId } from "../utils";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/i;

export const createElement = (template, data, events) => {
  let key = null;
  const dataId = createId();
  data.id = dataId;
  const rData = reactivData(data);
  const childComponents = [];

  const createTemplate = (template) => {
    while ((key = TEMPLATE_REGEXP.exec(template))) {
      if (key[1]) {
        const templateValue = key[1].trim();
        let data = getObjectField(rData.getAll(), templateValue);
        if (templateValue.includes("component")) {
          childComponents.push({ dataId: data.dataset.id, data });
          data = `<div data-id="${data.dataset.id}"></div>`;
        }
        template = template.replace(new RegExp(key[0], "i"), data);
      }
    }
    const element = new DOMParser().parseFromString(template, "text/html").body
      .firstChild;
    element.setAttribute("data-id", dataId);

    if (events && events.length > 0) {
      events.map(({ selector, event, func }) => {
        element
          .querySelector(selector)
          .addEventListener(event, func.bind(rData));
      });
    }
    if (childComponents.length > 0) {
      childComponents.map(({ dataId, data }) => {
        const portal = element.querySelector(`[data-id="${dataId}"]`);
        portal.replaceWith(data);
      });
    }

    return element;
  };

  const element = createTemplate(template);

  const updateElement = (id) => {
    const element = createTemplate(template);
    const portal = document.querySelector(`[data-id="${id}"]`);
    portal.replaceWith(element);
  };
  rData.addUpdate(updateElement);
  return element;
};

const reactivData = (data) => {
  const set = (key, value) => {
    console.log("set", value);
    console.log("getAll", data);
    console.log("this", this);
    data[key] = value;
    data.updateElement(data.id);
  };
  const addUpdate = (update) => {
    data.updateElement = update;
  };
  const getAll = () => data;
  const get = (key) => {
    return data[key];
  };
  return { getAll, set, get, addUpdate };
};

export const mountTemplate = (element, selector = "#app") => {
  const parent = document.querySelector(selector);
  if (parent && parent.childElementCount) {
    parent.firstChild.replaceWith(element);
  } else if (parent) {
    parent.appendChild(element);
  }
};
