import { getObjectField, createId, deepUpdate } from "../utils";

const TEMPLATE_REGEXP = /\{\{(.*?)\}\}/i;

type Event = {
  selector: string;
  event: string;
  func: Function;
};

type ChildComponent = { dataId: string; data: HTMLElement };

export const createElement = (
  template: string,
  data: any,
  events: Event[] | null
) => {
  let key: RegExpExecArray | null = null;
  const dataId = createId();
  data.id = dataId;
  const rData = reactivData(data);

  const createTemplate = (template: string) => {
    const childComponents: ChildComponent[] = [];
    while ((key = TEMPLATE_REGEXP.exec(template))) {
      if (key[1]) {
        const templateValue = key[1].trim();
        let data = getObjectField(rData.getAll(), templateValue);
        if (templateValue.includes("component")) {
          if (Array.isArray(data)) {
            let newData = "";
            data.map((component) => {
              childComponents.push({
                dataId: component.dataset.id,
                data: component,
              });
              newData += `<div data-id="${component.dataset.id}"></div>\n`;
            });
            data = newData;
          } else {
            childComponents.push({ dataId: data.dataset.id, data });
            data = `<div data-id="${data.dataset.id}"></div>`;
          }
        }
        template = template.replace(new RegExp(key[0], "i"), data);
      }
    }
    const element = new DOMParser().parseFromString(template, "text/html").body
      .firstChild;
    if (element) {
      (element as HTMLElement).setAttribute("data-id", dataId);
    }

    if (childComponents.length > 0) {
      childComponents.map(({ dataId, data }) => {
        const portal =
          element &&
          (element as HTMLElement).querySelector(`[data-id="${dataId}"]`);
        if (portal) {
          portal.replaceWith(data);
        }
      });
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

        //console.log("element, selector, targetEl", element, selector, targetEl);
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

const reactivData = (data: { id?: string; updateElement?: Function }) => {
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
    return data[key];
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
