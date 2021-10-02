import { ValidationRules } from './../../types';
import { createBlock } from '../../core/createBlock';
import { checkValid } from '../../utils/checkForm';

import './input.scss';

type PropsType = {
  class?: string;
  name?: string;
  label?: string;
  type?: string;
  value?: string | number;
  rules?: ValidationRules;
  placeholder?: string;
  onInput?: (e: Event) => void;
  onKeyup?: (e: KeyboardEvent) => void;
  onBlurCallback?: () => void;
};

const template = `
<div class="input-component {{ class }}">
  <input 
    placeholder="{{ placeholder }}" 
    type="{{ type }}" 
    value="{{ value }}" 
    name="{{ name }}"
  />
  <span class="input-error-message hide"></span>    
</div>
`;

export const Input = (props: PropsType) => {
  const events = {
    onBlur: (e: Event) => {
      const target = e.target as HTMLInputElement;
      const value = target.value;
      const messageEl = target.nextElementSibling;
      if (props.rules) {
        const { isValid, currentMessage } = checkValid(props.rules, value);
        if (!isValid) {
          (messageEl as HTMLElement).innerText = currentMessage;
          (messageEl as HTMLElement)?.classList.remove('hide');
        } else {
          (messageEl as HTMLElement)?.classList.add('hide');
        }
      }
      props.onBlurCallback && props.onBlurCallback();
    },
    onInput: props.onInput
  };
  return createBlock({ template, props, events });
};
