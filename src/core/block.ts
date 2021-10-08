import { createHTMLfromTemplate } from '../utils/createHTMLfromTemplate';
import { BlockPropsType, ChildrenType, IBlock } from '../types';
import { EventBus } from './eventBus';

export class Block implements IBlock {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  };

  _element: HTMLElement;
  children: ChildrenType;
  eventBus: EventBus;
  props: BlockPropsType;

  constructor(props: BlockPropsType, children: ChildrenType) {
    const eventBus = new EventBus();

    this.props = this._makePropsProxy(props) || {};
    this.children = children || {};
    this.eventBus = eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _makePropsProxy(props: BlockPropsType) {
    const proxyProps = new Proxy(props, {
      set(target: BlockPropsType, prop: string, value) {
        target[prop] = value;
        return true;
      },
      deleteProperty() {
        throw new Error('No access');
      }
    });
    return proxyProps;
  }

  _addChildren(children: ChildrenType) {
    for (const childName in children) {
      const child = children[childName];
      const elementChild = this._element.querySelector(
        `[data-component="${childName}"]`
      );
      const component = child.element;
      elementChild?.appendChild(component);
    }
  }

  _createResources() {
    this._element = document.createElement('div');
  }

  init() {
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    this.componentDidMount();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidUpdate(oldProps: BlockPropsType, newProps: BlockPropsType) {
    if (JSON.stringify(newProps) === JSON.stringify(oldProps)) {
      return false;
    }

    const response = this.componentDidUpdate();
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);

    return response;
  }

  _render() {
    const block = createHTMLfromTemplate(this.render());

    if (this._element.firstElementChild) {
      this._element.replaceChild(block, this._element.firstElementChild);
    } else {
      this._element.append(block);
    }

    if (this.props.onClick) {
      const clickCallback = this.props.onClick(this.setProps, this.props);
      block.addEventListener('click', clickCallback);
    }

    if (this.props.onBlur) {
      if (block.tagName === 'input') {
        block.addEventListener('blur', this.props.onBlur);
      } else {
        block
          .querySelector('input')
          ?.addEventListener('blur', this.props.onBlur);
      }
    }

    if (this.props.onInput) {
      if (block.tagName === 'input') {
        block.addEventListener('input', this.props.onInput);
      } else {
        block
          .querySelector('input')
          ?.addEventListener('input', this.props.onInput);
      }
    }

    if (this.props.onKeyup) {
      if (block.tagName === 'input') {
        block.addEventListener('keyup', this.props.onKeyup);
      } else {
        block
          .querySelector('input')
          ?.addEventListener('keyup', this.props.onKeyup);
      }
    }

    this._addChildren(this.children);
  }

  setProps = (nextProps: BlockPropsType) => {
    if (nextProps) {
      const oldProps = { ...this.props };
      this.props = { ...oldProps, ...nextProps };
      this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    }
  };

  componentDidMount() {}
  componentDidUpdate() {
    return true;
  }

  render() {
    return '';
  }

  get element(): HTMLElement {
    return this._element;
  }

  getElement(): HTMLElement {
    return this.element;
  }

  show(): void {
    this.getElement().style.display = 'block';
  }

  hide(): void {
    this.getElement().style.display = 'none';
  }
}
