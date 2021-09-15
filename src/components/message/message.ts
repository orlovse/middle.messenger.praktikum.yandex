import { Avatar } from '../avatar';
import { createBlock } from '../../core/createBlock';

import './message.scss';

type Props = {
  class?: string;
  text: string;
};

const template = `
<div class="message {{ class }}"> 
  <div class="message-avatar">
    <div data-component="messageAvatar"></div>
  </div>
  {{ text }} 
  <span class="message-date">12:58</span>
</div>`;

export const Message = (props: Props) => {

  const components = {
    messageAvatar: Avatar({})
  };
  return createBlock({ template, components, props });
};
