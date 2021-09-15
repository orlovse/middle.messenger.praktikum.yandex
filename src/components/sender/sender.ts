import { Button, Input } from '../';
import { createBlock } from '../../core/createBlock';

import './sender.scss';

const template = `
<div class="sender">
  <div data-component="senderInput"></div>
  <div data-component="senderSubmitButton"></div>
  <div data-component="senderOptionsButton"></div>
</div>
`;
export const Sender = () => {
  const components = {
    senderInput: Input({ label: 'Message', class: 'px-2' }),
    senderSubmitButton: Button({ name: 'Send' }),
    senderOptionsButton: Button({ name: '=>' })
  };

  return createBlock({ components, template });
};
