import { createElement } from "../../template";
import "./button.scss";

type Props = {
  name: string;
};

const Button = (props: Props) => {
  const buttonTemplate = `<button class="button">{{ props.name }}</button>`;
  const buttonData = { props };

  return createElement(buttonTemplate, buttonData);
};

export default Button;
