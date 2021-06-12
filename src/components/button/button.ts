import { createElement } from "../../template";
import "./button.scss";

type Props = {
  name?: string;
  class?: string;
};

const Button = (props: Props) => {
  const buttonTemplate = `<button class="button {{ class }}">{{ props.name }}</button>`;
  const buttonData = { props, class: props.class || "" };

  return createElement(buttonTemplate, buttonData);
};

export default Button;
