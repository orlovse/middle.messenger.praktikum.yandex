import { Avatar, Badge } from '../';
import { createBlock } from '../../core/createBlock';

import './contact.scss';

const template = `
<a href="/chat/{{ id }}" class="contact">
  <div class="contact-left-block">
    <div data-href="/chat/{{ id }}" class="avatar"></div>
    <div class="content">
      <p data-href="/chat/{{ id }}" class="title">{{ title }}</p>
      <p data-href="/chat/{{ id }}" class="subtitle">{{ lastMessage }}</p>
    </div>
  </div>
  <div data-href="/chat/{{ id }}" class="badge">{{ unreadCount }}</div>
</a>
`;

type PropsType = {
  id: number;
  title: string;
  lastMessage?: string;
  unreadCount: number;
};

export const Contact = (props: PropsType) => {
  const components = {
    contactAvatar: Avatar({}),
    contactBadge: Badge({ number: 2 })
  };

  return createBlock({ props, template, components });
};
