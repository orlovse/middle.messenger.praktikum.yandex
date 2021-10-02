import { createBlock } from './../../core/createBlock';
import './loading.scss';

const template = `
  <div class="loader">
    <div class="inner one"></div>
    <div class="inner two"></div>
    <div class="inner three"></div>
  </div>
`;

export const Loading = () => {
  return createBlock({ template });
};
