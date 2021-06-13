import { getObjectField, createId, deepUpdate } from "../utils";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/i;

type Event = {
  selector: string;
  event: string;
  func: Function;
};

type Component = {
  template: string;
  rData?: any;
  events?: Event[] | null;
  components?: any;
};

export const createElement = ({
  template,
  rData,
  events,
  components,
}: Component) => {
  let key: RegExpExecArray | null = null;

  const createTemplate = (template: string) => {
    while ((key = TEMPLATE_REGEXP.exec(template))) {
      if (key[1]) {
        const templateValue = key[1].trim();
        let dataToTemplate: any;
        if (templateValue.includes("components.")) {
          dataToTemplate = getObjectField(
            components,
            templateValue.replace("components.", "")
          );
          if (Array.isArray(dataToTemplate)) {
            let childs = "";
            dataToTemplate.map((childComponent) => {
              childs += `<div data-id="${childComponent.dataset.id}"></div>\n`;
            });
            dataToTemplate = childs;
          } else {
            dataToTemplate = `<div data-id="${dataToTemplate.dataset.id}"></div>`;
          }
        } else {
          dataToTemplate = getObjectField(rData.getAll(), templateValue);
        }
        template = template.replace(new RegExp(key[0], "i"), dataToTemplate);
      }
    }
    const element = new DOMParser().parseFromString(template, "text/html").body
      .firstChild;
    if (element) {
      (element as HTMLElement).setAttribute("data-id", rData.get("id"));
    }

    if (components) {
      const arrFromObj = Object.keys(components);
      if (arrFromObj.length) {
        arrFromObj.map((key) => {
          if (Array.isArray(components[key])) {
            components[key].map((childComponent) => {
              const portal =
                element &&
                (element as HTMLElement).querySelector(
                  `[data-id="${childComponent.dataset.id}"]`
                );
              if (portal) {
                portal.replaceWith(childComponent);
              }
            });
          } else {
            const portal =
              element &&
              (element as HTMLElement).querySelector(
                `[data-id="${components[key].dataset.id}"]`
              );
            if (portal) {
              portal.replaceWith(components[key]);
            }
          }
        });
      }
    }

    if (events && events.length > 0) {
      events.map(({ selector, event, func }) => {
        let targetEl: ChildNode | null = null;
        if (selector === "root") {
          targetEl = element;
        } else {
          targetEl =
            element && (element as HTMLElement).querySelector(selector);
        }

        if (targetEl) {
          targetEl.addEventListener(event, func.bind(rData));
        }
      });
    }

    return element;
  };

  const element = createTemplate(template);

  const updateElement = (id: string) => {
    const element = createTemplate(template);
    const portal = document.querySelector(`[data-id="${id}"]`);
    if (portal) {
      portal.replaceWith(element as HTMLElement);
    }
  };
  rData.addUpdate(updateElement);
  return element;
};

export const reactivData = (data: any) => {
  data.id = createId();
  const set = (key: string, value: any, notUpdate = false) => {
    if (key.includes(".")) {
      data = deepUpdate(data, key, value);
    } else {
      data[key] = value;
    }
    if (!notUpdate && data.updateElement) {
      data.updateElement(data.id);
    }
  };
  const addUpdate = (update: Function) => {
    data.updateElement = update;
  };
  const getAll = () => data;
  const get = (key: string) => {
    return getObjectField(data, key);
  };
  return { getAll, set, get, addUpdate };
};

export const mountTemplate = (element: HTMLElement, selector = "#app") => {
  const parent = document.querySelector(selector);
  if (parent && parent.firstChild) {
    parent.firstChild.replaceWith(element);
  } else if (parent) {
    parent.appendChild(element);
  }
};
