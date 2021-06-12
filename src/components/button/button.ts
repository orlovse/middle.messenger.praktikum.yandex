import { createElement } from "../../template";
import "./button.scss";

type Props = {
  name?: string;
  class?: string;
};

const Button = (props: Props) => {
  const buttonTemplate = `<button class="button {{ props.class }}">{{ props.name }}</button>`;
  const buttonData = { props };

  return createElement(buttonTemplate, buttonData);
};

export default Button;
