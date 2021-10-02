import { Button, Input } from '../';
import { createBlock } from '../../core/createBlock';

import './sender.scss';

const template = `
<div class="sender {{ class }}">
  <div data-component="senderInput" style="width: 100%"></div>
  <div data-component="senderSubmitButton"></div>
</div>
`;

type PropsType = {
  callback: (value: string) => void;
  buttonText?: string;
  class?: string;
  placeholder?: string;
};

type DataType = {
  newMessage: string;
};

export const Sender = (props: PropsType) => {
  const data: DataType = {
    newMessage: ''
  };

  const onSearch = () => {
    props.callback(data.newMessage);
    data.newMessage = '';
    components.senderInput.setProps({ newMessage: null });
  }

  const components = {
    senderInput: Input({
      placeholder: props.placeholder,
      class: 'pr-1',
      onInput: (e: Event) => {
        const { target } = e;
        const value = (target as HTMLInputElement).value;
        data.newMessage = value;
      },
      onKeyup: (e: KeyboardEvent) => {
        if(e.key === 'Enter') {
          e.preventDefault();
          onSearch()
        }
      },
      value: data.newMessage || ''
    }),
    senderSubmitButton: Button({
      name: props.buttonText || 'Send',
      onClick: () => () => {
        onSearch()
      }
    })
  };

  return createBlock({ components, data, template, props });
};
