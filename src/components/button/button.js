import { createElement } from "../../template";
import "./button.scss";

const Button = (props) => {
  const buttonTemplate = `<button class="button">{{ props.name }}</button>`;
  const buttonData = { props };

  return createElement(buttonTemplate, buttonData);
};

export default Button;
