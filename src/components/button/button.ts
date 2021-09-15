import { BlockPropsType, SetPropsType } from '../../types';
import { createBlock } from '../../core/createBlock';
import './button.scss';

type PropsType = {
  name?: string;
  class?: string;
  onClick?: (e: any) => void;
  onClickChild?: (
    setState: SetPropsType,
    props: BlockPropsType
  ) => (e: any) => void;
};

const template = `<button class="button {{ class }}">{{ name }}</button>`;

export const Button = (props: PropsType) => {
  return createBlock({ template, props });
};
