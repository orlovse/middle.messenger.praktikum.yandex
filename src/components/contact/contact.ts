import { Avatar, Badge } from '../';
import { createBlock } from '../../core/createBlock';

import './contact.scss';

const template = `
<div class="contact">
  <div data-component="contactAvatar"></div>
  <div class="content">
    <p class="title">Test contact</p>
    <p class="subtitle">Message text</p>
  </div>
  <div data-component="contactBadge"></div>
</div>
`;

export const Contact = () => {

  const components = {
    contactAvatar: Avatar({}),
    contactBadge: Badge({ number: 2 })
  };

  return createBlock({ template, components });
};
