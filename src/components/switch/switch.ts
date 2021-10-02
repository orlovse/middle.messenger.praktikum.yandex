import { createBlock } from './../../core/createBlock';
import './switch.scss';

type PropsType = {
  isChecked: boolean;
  onClick(): void;
};

const template = `
  <div class="switch">
    <input type="checkbox" name="switch" id="switch" {{#if isChecked}} checked {{/if}}>
    <label for="switch"></label>  
  </div>
`;

export const Switch = (props: PropsType) => {
  return createBlock({ props, template });
};
