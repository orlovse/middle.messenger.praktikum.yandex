import { BlockPropsType, SetPropsType } from '../../types';
import { createBlock } from '../../core/createBlock';
import './button.scss';

type PropsType = {
  name?: string;
  class?: string;
  onClick?: (setState: SetPropsType, props: BlockPropsType) => (e: any) => void;
  type?: string;
};

const template = `<button class="button {{ class }}" type={{ type }}>{{ name }}</button>`;

export const Button = (props: PropsType) => {
  return createBlock({ template, props });
};
