import { createTemplate } from "../../template";
import "./button.scss";

const Button = (props) => {
  const buttonTemplate = `<button class="button">{{props.name}}</button>`;
  const buttonData = { props };

  return createTemplate(buttonTemplate, buttonData);
};

export default Button;
