import { createBlock } from '../../core/createBlock';
import './badge.scss';

type Props = {
  number: number;
};

const template = `<div class="badge">{{ number }}</div>`;

export const Badge = (props: Props) => {
  return createBlock({ template, props });
};
