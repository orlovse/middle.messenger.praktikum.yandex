import { EventBus } from "./eventBus";

export function parseStringToHtml(blockAsString: string): HTMLElement {
  const blockAsHtml = new DOMParser().parseFromString(blockAsString, "text/html").body.firstChild;
  return blockAsHtml as HTMLElement || document.createElement("div");
}

export type TProps = {
    [key: string]: string | number | boolean | Function | undefined | Object | Array<Object>, // eslint-disable-line @typescript-eslint/ban-types
    onClick?: (e?: Event) => void,
    onBlur?: (e?: Event) => void,
};
export type TChildren = {[key: string]: any}; // eslint-disable-line @typescript-eslint/no-explicit-any

export interface IBlock {
    element: HTMLElement;
    init: () => void;
    hide: () => void;
    show: () => void;
    render: () => void;
    componentDidMount: () => void;
    componentDidUpdate: () => boolean;
    setProps: (nextProps: unknown) => void;
    getElement: () => HTMLElement;
}

export class Block implements IBlock {
    static EVENTS = {
      INIT: "init",
      FLOW_CDM: "flow:component-did-mount",
      FLOW_CDU: "flow:component-did-update",
      FLOW_RENDER: "flow:render"
    };
  
    _element: HTMLElement;
    props: TProps;
    children: TChildren;
    eventBus: EventBus;
  
    constructor(props: TProps, children: TChildren)  {
        const eventBus = new EventBus();
  
        this.props = this._makePropsProxy(props) || {};
        this.children = children || {};
    
        this.eventBus = eventBus;
    
        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }
  
    _registerEvents(eventBus: EventBus): void {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _makePropsProxy(props: TProps): TProps {
        const proxyProps = new Proxy(props, {
            // eslint-disable-next-line
            // @ts-ignore
            set(target: TProps, prop: keyof TProps, value) {
                target[prop] = value;
                return true;
            },
            deleteProperty() {
                throw new Error("нет доступа");
            }
        });
        return proxyProps;
    }

    _addChildrenEventListeners(children: TChildren): void {
        for (const name in children) {
          const child = children[name]
            const childProps = child.props;
            const elementChild = this._element.querySelector(`[data-component="${name}"]`);
            const component = child.element
            //const componentToRender = component.firstChild || component
            elementChild?.appendChild(component)

            if(childProps.onClickChild) {
                const ab = childProps.onClickChild(this.setProps, this.props)
                elementChild?.addEventListener("click", ab);
            }

            // if (childProps.onClick) {
            //     const elementChildren = this._element.querySelectorAll(`[data-component="${name}"]`);
            //     for (const child of elementChildren) {
            //       console.log('childProps', childProps)
            //         child.addEventListener("click", childProps.onClick);
            //     }
            // }
        }
    }
  
    _createResources(): void {
        const tagName = "div";
        this._element = document.createElement(tagName);
    }
  
    init(): void {
        this._createResources();
        this.eventBus.emit(Block.EVENTS.FLOW_CDM);
    }
  
    _componentDidMount(): void {
        this.componentDidMount();
        this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
    }
  
    _componentDidUpdate(oldProps: TProps, newProps: TProps): boolean {

        if (JSON.stringify(newProps) == JSON.stringify(oldProps)) {
            return false;
        }
        const response = this.componentDidUpdate();
        //this.eventBus.emit(Block.EVENTS.FLOW_RENDER);

        return response;
    }
  
    _render(): void {
        const block = parseStringToHtml(this.render());
        this._element.firstElementChild  ? this._element.replaceChild(block, this._element.firstElementChild ) : this._element.append(block);
        
        if (this.props.onClick) {
            block.addEventListener("click", this.props.onClick);
        }

        if (this.props.onBlur) {
          if(block.tagName === "input") {
            block.addEventListener("blur", this.props.onBlur);
          }else {
            block.querySelector('input')?.addEventListener("blur", this.props.onBlur);
          }

        }
        this._addChildrenEventListeners(this.children);
    }

    setProps = (nextProps: TProps): void => {
        if (!nextProps) {
            return;
        }
        console.log('nextProps', nextProps, this.props)
        const oldProps = {...this.props};
        this.props = {...oldProps, ...nextProps};
        //console.log('this.props', oldProps, this.props)
        this.eventBus.emit(Block.EVENTS.FLOW_CDU, oldProps, nextProps);
    };

    componentDidMount(): void {} // eslint-disable-line @typescript-eslint/no-empty-function
    componentDidUpdate(): boolean { return true; }
    render(): string { return ""; }

    get element(): HTMLElement {
        return this._element;
    }

    getElement(): HTMLElement {
        return this.element;
    }
  
    show(): void {
        this.getElement().style.display = "block";
    }
  
    hide(): void {
        this.getElement().style.display = "none";
    }
}
