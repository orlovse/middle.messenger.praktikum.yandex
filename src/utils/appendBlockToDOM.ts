import { IBlock } from '../types';

export const appendBlockToDOM = (query: string, block: IBlock) => {
  const root = document.querySelector(query);
  root && root.append(block.element);
  block.show();
};
