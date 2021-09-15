import { Block } from '../core/block';

export type BlockPropsType = {
  [key: string]: any;
  onClick?: (e?: Event) => void;
  onBlur?: (e?: Event) => void;
};

export type ChildrenType = { [key: string]: Block };

export type CreateBlockPropsType = {
  components?: any;
  componentDidMount?(setProps: SetPropsType, props: BlockPropsType): void;
  data?: any;
  events?: any;
  props?: any;
  template: string;
};

export type RoutePropsType = {
  [key: string]: string;
};

export type SetPropsType = (nextProps: BlockPropsType) => void;

export type FetchMethodType = (
  url: string,
  options: any
) => Promise<XMLHttpRequest>;

export type RequestMethodType = (
  url: string,
  options: any,
  timeout?: number
) => Promise<XMLHttpRequest>;

export interface IFetch {
  get: FetchMethodType;
  post: FetchMethodType;
  put: FetchMethodType;
  patch: FetchMethodType;
  delete: FetchMethodType;
  request: RequestMethodType;
}

export interface IBlock {
  componentDidMount: () => void;
  componentDidUpdate: () => boolean;
  element: HTMLElement;
  getElement: () => HTMLElement;
  hide: () => void;
  init: () => void;
  render: () => void;
  setProps: (nextProps: BlockPropsType) => void;
  show: () => void;
}

export type ValidationRules = {
  minSymbols?: number;
  phone?: boolean;
  email?: boolean;
  isRequired?: boolean;
};
