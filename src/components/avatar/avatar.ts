import { createBlock } from '../../core/createBlock';
import './avatar.scss';

const template = `<div class="avatar"></div>`;

export const Avatar = (props) => {
  return createBlock({ template, props });
};
