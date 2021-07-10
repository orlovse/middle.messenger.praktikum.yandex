import { createId } from "./../utils/index";
import { EventBus } from "./eventBus";
import { isEqual } from "../utils/isEqual";

export type Props = {
  children?: any;
  events?: { [key: string]: Function };
  data?: any;
  subscribes?: any;
  [key: string]: any;
};

const isChildren = (property: string) => property === "children";

export class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _id: string;
  _element: HTMLElement;
  _children: Props;
  props: Props;
  prevProps: Props;
  eventBus: EventBus;

  constructor(props: Props = {}) {
    this.eventBus = new EventBus();

    this._id = createId();
    this._children = this._makeChildren(props.children);
    this.props = this._makePropsProxy({ ...props, children: this._children });

    this._registerEvents(this.eventBus);
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement();
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (!response) {
      return;
    }
    this._render();
  }

  componentDidUpdate() {
    return !isEqual(this.prevProps, this.props);
  }

  setProps = (nextProps: Props) => {
    if (!nextProps) {
      return;
    }

    this.prevProps = { ...this.props };
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();

    this._removeEvents();
    this._element.innerHTML = block;
    console.log("this el", this._element);

    const { children = {} } = this.props;
    Object.keys(children).forEach((childName) => {
      const markerID = children[childName]._id;
      const markerBlock = this._element.querySelector(
        `[data-id="${markerID}"]`
      );

      const newContent = children[childName].getContent();
      if (markerBlock && markerBlock.parentNode) {
        markerBlock.parentNode.replaceChild(newContent, markerBlock);
      }
    });

    this._addEvents();
  }

  render(): string {
    return "";
  }

  getId(): string {
    return this._id;
  }

  getContent(): HTMLElement {
    return this.element;
  }

  _makePropsProxy(props: Props) {
    const self = this;

    return new Proxy(props, {
      get(target: Props, prop: string) {
        if (prop.startsWith("_")) {
          throw new Error("No access");
        }

        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target: Props, prop: string, value) {
        if (prop.startsWith("_")) {
          throw new Error("No access");
        }

        if (isChildren(prop)) {
          target[prop] = self._makeChildren(value);
        } else {
          target[prop] = value;
        }

        self.eventBus.emit(Block.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error("No access");
      },
    });
  }

  _createDocumentElement() {
    const element = document.createElement("div");
    element.setAttribute("data-id", this._id);
    return element;
  }

  _addEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(
        eventName,
        events[eventName] as EventListener,
        true
      );
    });
  }

  _removeEvents() {
    const { events = {} } = this.props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(
        eventName,
        events[eventName] as EventListener
      );
    });
  }

  _makeChildren(children: any = []) {
    this._deepRemoveSubscribes(this.props?.children);

    return children.reduce((result: Props, childData: any) => {
      const { key, type: Child, ...childProps } = childData;
      result[key] = new Child(childProps);

      return result;
    }, {});
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }

  _deepRemoveSubscribes(childs: any = {}) {
    Object.keys(childs).forEach((childKey) => {
      const { subscribes = [], children = {} } = childs[childKey].props;

      subscribes.forEach((unsubscribe: Function) => unsubscribe());
      this._deepRemoveSubscribes(children);
    });
  }
}
